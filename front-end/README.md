# Rockbot Tech Screen - UI

* [General](#general)
* [Documentation](#documentation)
* [Running locally](#running-locally)
  + [Prerequisite](#prerequisite)
  + [Running instructions](#running-instructions)
* [Hosting & Deployment](#hosting--deployment)
* [Testing](#testing)
* [Libraries](#libraries)

## General

This UI is meant to be an extremely basic frontend for a "songs" API.

Very little styling and functionality. It's really only got the main page.

On that page it displays all the songs currently stored in the backend. There is an API route for this app, but it's just to proxy the client-side page request for all the songs.

Each song can be clicked on and it displays all the relevant song info.

## Documentation

This documentation is a just a taste of what I might normally include. I might include references to relevant decision docs, charts/diagrams, tech stack, etc. To make sure the developer has less questions they need to ask someone to get it started. IMO everything the developer needs to know to use/run the app should be contained within the repo's documentation. Too big for one README, split it up. Use links and TOCs to help.

## Running locally

### Prerequisite
Node.js must be installed on your machine, see the [package.json](./package.json) for version info

### Running instructions

1. Install dependencies
`npm install`

2. Start dev mode
`npm run dev`

3. Browse to [http://localhost:3000](http://localhost:3000)

## Hosting & Deployment

For deployment of this application, I'd probably just use the Vercel platform. Very easy to configure and very developer friendly IMO. But you could easily deploy on whatever your flavor of cloud provider of choice.

## Testing

I'm a firm believer in test everything you can internally to the repo. If it's external and you can not 100% count on it being available, use mocks to your advantage.

I think UI unit testing gets passed over a lot, and I don't know why. Look at the pyramid of testing. Being able to test a component, button click, expand/collapse, and toggle, ets. just means that the more reliable your codebase is, and the more confident developes can be about adding new functionality or modifying existing functionality. Test everything in isolation as much as possible. Working at Sonos, I prided myself on having 100% code coverage on my CDK constructs libraries. (And they weren't poor tests either!)

## Libraries

I won't drain all the libs included here, I think most are self explanatory. 

I did include Zod to validate the shape of objects coming back from the API. Since it's backed by DDB, I know that the shape might not be strict. (Note: validating like this is _probably_ not necessary, but I figured I'd show on front and back)

I used react-hook-form to help validate and display errors related to the POST for a new song

Some of my other favorite libs are [day.js](https://day.js.org), [faker](https://fakerjs.dev) (controversy and all), [factory.ts](https://github.com/willryan/factory.ts)

