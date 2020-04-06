import React from "react"
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import countryList from 'react-select-country-list'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';

class RegisterForm extends React.Component {

    endpoint =
        "https://5rc69sg2j8.execute-api.eu-west-2.amazonaws.com/dev/submit";

    state = {
        FNAME : '',
        LNAME : '',
        EMAIL : '',
        EMAILMATCH : '',
        PHONE : '',
        BIRTHDAY : '',
        POSTCODE  : '',
        COUNTRY : '',
        INFO : '',
        STATUS : 'existing',
        TERMS : false,
      //  EXPERIENCE : [],
        errors : false,
        working : false,
        success : false
    };

    submit = async(e) => {

        e.preventDefault();

        this.setState({working:true}, async() => {
            const { endpoint } = this;

            try {
                let response =
                    await fetch(endpoint, {
                        method: "POST",
                        //mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Credentials': true,
                        },
                        body: JSON.stringify(this.state)
                    });

                response = await response.json();

                console.log(response);

                if(response.body.response.errors) {
                    document
                        .getElementById('register-form')
                        .scrollIntoView(true);

                    this.setState({errors: response.body.response.errors})
                } else {
                    this.setState({success : true})
                }

            } catch(e) {
                console.log("error", e);
            }

            this.setState({working:false});
        });

    };

    inputChange = e => {
        let {name, value, checked, type} = e.target;

        if(type==='checkbox') {
            name = "TERMS";

            if(checked) {
                value = true
            } else {
                value = false;
            }

            /*let { experience } = this.state;

            if(checked) {
                experience.push(value);
            } else {
                const index =
                    experience.indexOf(value);
                if (index > -1) {
                    experience.splice(index, 1);
                }
            }
            value = experience; */
        }

        this.setState({[name] : value});

    };

    render() {

        const { errors, working, success } = this.state;

        let countries = countryList()
            .getData();

        countries.some(item => item.value === "US" &&
            countries.unshift(item));
        countries.some(item => item.value === "GB" &&
            countries.unshift(item));
        countries = [...new Set(countries)];

        if(success) {
            return <h2>Thank you for registering.</h2>
        }

        return(
        <form  noValidate>
            {(errors ?
                <h3 className="color-red">There are errors in the form. <br />Please correct.</h3>
                :
             '')}
            <FormControl component="fieldset" fullWidth style={{marginBottom:20}}>
                <TextField
                    error={!!errors.FNAME}
                    required
                    id="filled-required"
                    label="First name"
                    variant="filled"
                    name="FNAME"
                    onChange={this.inputChange}
                    helperText={(errors.FNAME ? errors.FNAME : false)}
                />
            </FormControl >
            <FormControl component="fieldset" fullWidth style={{marginBottom:20}}>
                <TextField
                        error={!!errors.LNAME}
                        required
                        id="filled-required"
                        label="Surname"
                        variant="filled"
                        name="LNAME"
                        onChange={this.inputChange}
                        helperText={(errors.LNAME ? errors.LNAME : false)}
                />
            </FormControl>
            <FormControl component="fieldset" fullWidth style={{marginBottom:20}}>
                <TextField
                    error={!!errors.EMAIL}
                    required
                    id="filled-required"
                    label="Email"
                    variant="filled"
                    name="EMAIL"
                    onChange={this.inputChange}
                    helperText={(errors.EMAIL ? errors.EMAIL : false)}
                />
            </FormControl>
            <FormControl component="fieldset" fullWidth style={{marginBottom:20}}>
                <TextField
                    error={!!errors.EMAILMATCH}
                    required
                    id="filled-required"
                    label="Verify email"
                    variant="filled"
                    name="EMAILMATCH"
                    onChange={this.inputChange}
                    helperText={(errors.EMAILMATCH ? errors.EMAILMATCH : false)}
                />
            </FormControl>
            <FormControl component="fieldset" fullWidth style={{marginBottom:20}}>
                <TextField
                    id="filled-required"
                    label="Mobile contact number"
                    variant="filled"
                    name="PHONE"
                    onChange={this.inputChange}
                />
            </FormControl>
            <FormControl component="fieldset" fullWidth style={{marginBottom:20}}>
                <TextField
                    id="date"
                    label="Date of birth"
                    type="date"
                    variant="filled"
                    name="BIRTHDAY"
                    onChange={this.inputChange}
                />
            </FormControl>

            <FormControl component="fieldset" fullWidth error={!!errors.COUNTRY} style={{marginBottom:20}}>
                <InputLabel id="country">&nbsp;&nbsp;&nbsp;&nbsp;Country</InputLabel>
                <Select
                    id="country"
                    variant="filled"
                    name="COUNTRY"
                    onChange={this.inputChange}
                >
                    {
                        countries
                            .map((k, v) => {
                            return <MenuItem key={v}
                                value={k.label}>{k.label}
                            </MenuItem>
                        })
                    }

                </Select>
                {(errors.COUNTRY ? <FormHelperText>&nbsp;&nbsp;&nbsp;&nbsp;{errors.COUNTRY}</FormHelperText> : false)}
            </FormControl>

            <FormControl component="fieldset" fullWidth style={{marginBottom:20}}>
                <TextField
                    error={!!errors.POSTCODE}
                    required
                    id="filled-required"
                    label="County or postcode"
                    variant="filled"
                    name="POSTCODE"
                    onChange={this.inputChange}
                    helperText={(errors.POSTCODE ? errors.POSTCODE : false)}
                />
            </FormControl>
            <FormControl component="fieldset" fullWidth style={{marginBottom:20}}>
                <TextField
                    multiline
                    rows={10}
                    id="filled-required"
                    label="Information relevant to position sought"
                    variant="filled"
                    name="INFO"
                    onChange={this.inputChange}
                />
            </FormControl>

            <section>
            <FormLabel component="legend">Current Status:</FormLabel>
                <RadioGroup name="STATUS" defaultValue="existing" onChange={this.inputChange}
                >
                    <FormControlLabel value="existing"
                                      control={<Radio color="primary" />}
                                      label="Existing relevant security clearance" />
                    <FormControlLabel value="recent"
                                      control={<Radio color="primary" />}
                                      label="Recent relevancy security clearance" />
                    <FormControlLabel value="none"
                                      control={<Radio color="primary" />}
                                      label="No relevant security clearance" />
                </RadioGroup>
            </section>


            { /* <section>
                <FormLabel component="legend">Experience in the following:</FormLabel>
                <FormGroup>
                    <FormControlLabel name="EXPERIENCE" value="Detective" control={<Checkbox onChange={this.inputChange} />} label="Detective" />
                    <FormControlLabel name="EXPERIENCE" value="Training" control={<Checkbox onChange={this.inputChange} />} label="Training" />
                    <FormControlLabel name="EXPERIENCE" value="HOLMES2" control={<Checkbox onChange={this.inputChange}  />} label="HOLMES2" />
                    <FormControlLabel name="EXPERIENCE" value="Child Protection" control={<Checkbox onChange={this.inputChange}  />} label="Child Protection" />
                    <FormControlLabel name="EXPERIENCE" value="SOCO" control={<Checkbox onChange={this.inputChange}  />} label="SOCO" />
                    <FormControlLabel name="EXPERIENCE" value="Intelligence Analysis" control={<Checkbox onChange={this.inputChange}  />} label="Intelligence Analysis" />
                    <FormControlLabel name="EXPERIENCE" value="Digital Forensics" control={<Checkbox onChange={this.inputChange}  />} label="Digital Forensics" />
                    <FormControlLabel name="EXPERIENCE" value="PNC" control={<Checkbox onChange={this.inputChange}  />} label="PNC" />
                    <FormControlLabel name="EXPERIENCE" value="MIR" control={<Checkbox onChange={this.inputChange}  />} label="MIR" />
                    <FormControlLabel name="EXPERIENCE" value="Cyber Crime" control={<Checkbox onChange={this.inputChange}  />} label="Cyber Crime" />
                    <FormControlLabel name="EXPERIENCE" value="Event Security" control={<Checkbox onChange={this.inputChange}  />} label="Event Security" />
                    <FormControlLabel name="EXPERIENCE" value="Forensics" control={<Checkbox  onChange={this.inputChange} />} label="Forensics" />
                    <FormControlLabel name="EXPERIENCE" value="Family Liaison" control={<Checkbox onChange={this.inputChange}  />} label="Family Liaison" />
                </FormGroup>
            </section> */ }

            <section>
                <FormControl error={!!errors.TERMS}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox name="TERMS" onChange={this.inputChange}  />}
                            label="I accept your privacy conditions."
                        />
                    </FormGroup>
                    {(errors.TERMS ? <FormHelperText>&nbsp;&nbsp;&nbsp;&nbsp;{errors.TERMS}</FormHelperText> : false)}
                </FormControl>
            </section>

            {(working) ?
                <CircularProgress  /> :
                <button onClick={(e) => this.submit(e)} className="button">Register Now</button>
            }
        </form>

        )
    }
}

export default RegisterForm;