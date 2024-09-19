# Songs App

## What does this project do?
This project is meant to demonstrate a front-end to backend API for music. 
The API has two simple endpoints; one to retrieve all songs stored in DynamoDB and one to persist one to DynamoDB.
The front-end has two pages, the home page and the "add new song" page. Meant to reflect the backend API.

## What did I hope to accomplish?
This project was meant to showcase that in addition to front-end and backend skills (I was THE CSS guy while at Liberty Mutual[^1]), I understand the full gamut of IaC, DB, DX, etc.
I think a lot of times between those points I just listed, one usually falls by the wayside, is an afterthought, or usually is just hacked until it works. I believe in thinking more of those things out; the better the standards are from the get-go, the better the codebase is overall long term.

## Challenges/Shortcuts, Hard/Easy
Initially I found it a challenge to work in Go and GCP. I had hoped Pulumi would make it easier on me, but Go proved a problem setting up for me. Because I didn't know what was an "appropriate" amount of time to spend on this, I switched to TS, AWS, and AWS CDK. It's stuff I know, but I wanted to showcase *something*. I have not setup DDB and Lambdas to run locally (very well) before, so I really wanted to do that for this project. I won't say it was super challenging, but I learned something by doing it and I'm always happy about learning something new. Definitely not something I shy away from.

I would have set this up with a better monorepo/shared code structure, but for the sake of time, I just copy and pasted. It's been a little bit since I've had to set a monorepo with shared code/internal libs up from scratch and with frequent lib updates and whatnot, I didn't feel I would be negatively judged on this shortcut. I also didn't set up unit testing for the most part. I don't generally skip over this, but again, keeping time in mind I let this one go. Even though it hurt my soul...

Once I switched to TS and AWS CDK, it was all relatively easy, just time consuming more than anything else. Account setup, bootstrapping, configuration, etc. It's not something I do every day, so it's sort of like riding a bike, but it's a little shaky when you get back on.

## Notes
I'm sure this project will seem extremely basic, but I had to balance how much time I spent on it. Work/life balance is very important to me, particularly with unpaid work. The other reason I'd cite for being as barebones as it is, is my creativity when presented with blank slates. I'm very good at having "creative" solutions to solve problems, but I'm not very good at creating problems in the first place. Hence why my portfolio site is always a MASSIVE work in progress. 😬 😂

## UI

Check out the [UI README](./front-end/README.md)

## API

Check out the [API README](./backend-api/README.md)

You'll notice a bit of shared code in regard to the Song interface. I'd probably structure this repo with better mono-repo and internal package support to deal with this rather than copy and paste the code between front and back.

[^1]: I did not want to be the CSS guy. Although it's leagues ahead of where it used to be!
https://css-tricks.com/wp-content/uploads/2021/04/css-is-awesome.jpg