# Policing People Website Assets

### Includes
- Static Website built with Gatsby
- An AWS serverles function to handle Registration

### Website
- Clone the repository - 

`git clone https://github.com/bambattajb/policing-people.git`

- Download `npm_modules`

`cd site && npm install`

- Make sure Gatsby is installed and run - 

`cd site && gatsby develop`

- To build a production version run - 

`cd site && gatsby build`

- To deploy to S3 run - 

`cd site && npm run deploy`

### Server
- Download `node_modules`

`cd server/register && npm install`

- Deploy the Serverless function make sure The Serverless Framework is installed and run - 

`cd server/register && sls deploy`

- Testing the function run -  

`serverless invoke local --function mailchimp --path test.json`

(note `test.json` includes data to pass into function)


&copy; Policing People Ltd