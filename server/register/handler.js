require('dotenv').config();
var Mailchimp = require('mailchimp-api-v3');
var validator = require("email-validator");
var mailchimp = new Mailchimp(process.env.MC_API_KEY);
'use strict';

module.exports.submit = async event => {

    let errors = {},
        response = {},
        body;

    if(typeof event==='string') {
        event = JSON.parse(event);
    }

    if(typeof event.body==='string') {
        event.body = JSON.parse(event.body);
    }

    body = event.body;
    delete body.errors;
    delete body.working;
    delete body.success;

    const mandatory = {
        "EMAIL" : {
            "type": "validate",
            "error": "Your email address is invalid"
        },
        "EMAILMATCH" : {
            "type" : "match",
            "error" : "Your inputted email addresses to not match"
        },
        "FNAME": {
            "type": "notempty",
            "error": "Please enter your first name"
        },
        "LNAME": {
            "type": "notempty",
            "error": "Please enter your surname"
        },
        "COUNTRY": {
            "type": "notempty",
            "error": "Please enter your country"
        },
        "POSTCODE": {
            "type": "notempty",
            "error": "Please enter your postcode"
        },
        "STATUS": {
            "type": "notempty",
            "error": "Please enter your status"
        },
        "TERMS" : {
            "type" : "required",
            "error" : "Please agree to the terms"
        }
    };

    for ( let field in body ) {
        const mField = mandatory[field];
        if(mField) {
            const mValue = body[field];

            if (mField.type === 'notempty' && (!mValue || mValue === '')) {
                errors[field] = mField.error;
            }
            if (mField.type === 'validate' && !validator.validate(mValue)) {
                errors[field] = mField.error;
            }
            if (mField.type==='required' && (!mValue)) {
                errors[field] = mField.error;
            }
            if (mField.type==='match' && (body.EMAIL!==mValue)) {
                errors[field] = mField.error;
            }
        }
    }

    delete(body.TERMS);

    if(Object.keys(errors).length === 0 && errors.constructor === Object) {
        try {
            response = await mailchimp.post('/lists/'+process.env.MC_LIST_ID+'/members', {
                email_address : body.EMAIL,
                status : 'subscribed',
                merge_fields : body
            });
        } catch(e) {
            response['exists'] = "It appears as though you are already registered using " + body.EMAIL
            response['e'] = e;
        }

    } else {
        response['errors'] = errors;
    }

    return {
        statusCode: 200,
        body: {
            response,
            body
        }
    };
};
