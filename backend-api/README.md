# Rockbot Tech Screen - API

## General

This API has a simple POST which allows a consumer of the API would use to add more songs to the DB.

This API also houses a GET which fetches all of the songs currently in the DB.

## Hosting

This API is hosted on AWS. It's built using CDK for the infrastructure deploying AWS Lambdas and DynamoDB. I stuck to function URLs for the lambdas rather then deploying an entire API Gateway. The DB and two endpoints are live at:

GET: https://hbghdpmggwgydxiftvyd4mtxxa0zrcfa.lambda-url.us-east-1.on.aws/

POST: https://du34l2f6o2k7g5wi6tehmyjopa0ubann.lambda-url.us-east-1.on.aws/

## Caching

Caching for me is very much API and requirement specific, some APIs/endpoints you may not want a caching layer, some you do want something.

In any API you have to consider how often you want stale data or not. How can you generate new data? Is it too much overhead? Latency? DB load? On and on and on

## Application Scaling

So in most cases for APIs I like to use what I call a "serverless-first" approach. IMO it's very easy to take a function and pop it in a container (even with auto-scaling), but it's a lot harder to take an API and break it down into serverless fucntions. Again, this depends on the needs of the API.

In my case, scaling is essentially "built-in", but you do have to consider concurrent instances, load balancing, cold starts, etc.

## Testing

I'm a firm believer in test everything you can internally to the repo. If it's external and you can not 100% count on it being available, use mocks to your advantage.

With AWS CDK v2, I think AWS put a lot of effort in being able to test your infrastructure code appropriately. I really love being able to accurately test your infrastructure alongside your application code. More fullstack/vertical slice with more developer confidence. Developer confidence leads to faster and more productive devs, IMO.

## Deployment

For deployment of this app, I'd likely use GitHub Actions. It's what I'm most familiar with (I also really like how user friendly and flexible it is). I'd probably create an IAM role that allows for access to AWS resources to allow for deployment, [see this doc](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services). Since I don't need that for this app, I'd likely just download an Access Key and Secret and put those as secret values in the GH repo.

## Libraries

I included Zod to deal with validation of the POST request. I'd likely do more explicit validation and error messages for the request in a production environment.

I also included the uuid lib to generate uuid's for each song posted to the DB.

## Documentation

Given the time, I'd add an Open API/Swagger doc to document each endpoint, contract, and functionality thoroughly, but here I figure that would be forgiven.

This documentation is a just a taste of what I might normally include. I might include references to relevant decision docs, charts/diagrams, tech stack, etc. To make sure the developer has less questions they need to ask someone to get it started. IMO everything the developer needs to know to use/run the app should be contained within the repo's documentation. Too big for one README, split it up. Use links and TOCs to help.

## Running locally

### Prerequisites
Node.js must be installed on your machine, was built using node 20.X

[Docker](https://www.docker.com) must be installed

AWS CLI needs to be installed and configured for use with the account

Follow setup steps [here](https://www.npmjs.com/package/serverless-dynamodb) (Java, not docker)

### Running instructions

1. Install dependencies
`npm install`

2. Start the lambdas and DDB
`npx sls offline start`

3. Verify you have the song table by running
`aws dynamodb list-tables --endpoint-url http://localhost:8000`

    a. Note: if this returns an empty array, something has gone wrong with configuration and setup



## Learning

I learned how to get Lambdas and DDB up and running locally, with seeds! That was fun. Good to know for the future.



 