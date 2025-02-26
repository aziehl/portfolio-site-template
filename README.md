
# Getting Started 

This is a simple [Nextjs](https://nextjs.org) SPA using [Mantine.dev](https://mantine.dev). It's meant as an in-place replacement for an Adobe Portfolio site, using [Cloudinary](https://cloudinary.com/) as a CDN for portfolio images, linking to a store page, an about page with a contact form and optionally additional static pages. The contact form wraps a google contact form with a Repcatchpa for centralizing responses.

The project can be deployed using Amplify and in the future Nextjs API routing for more complex serverside handling.

## Getting started

In the project directory, run the following command to install all modules:
`npm install`

To start the application locally and access it on your browser (http://localhost:3000), run the following command:
`npm run dev`

## Deploying to Amplify

In order to deploy to Amplify, you have to take the following steps:
1. Push this code to Github.
2. Link Amplify and your Github.
3. Deploy the branch.
4. Setup a Route 53 hosted zone through Amplify and set name servers on your custom domain name.

## Available Scripts

In the project directory, you can run:

`npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `out` folder.\
It correctly bundles Nextjs in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

For lint tests use
`npm run lint`

## License

This sample application is licensed under [the MIT-0 License](https://github.com/aws/mit-0).
