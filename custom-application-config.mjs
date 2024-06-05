import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
    name: 'powerboard',
    entryPointUriPath: 'powerboard-app',
    cloudIdentifier: 'gcp-eu',
    env: {
        development: {
            initialProjectKey: process.env.APP_PROJECT_KEY,
        },
        production: {
            applicationId: 'clx061kca005it6mmeidbknjx',
            url: 'https://commercetools-powerboard-custom-aplication.vercel.app',
        },
    },
    additionalEnv:{
        clientId: process.env.APP_CLIENT_ID,
        clientSecret: process.env.APP_CLIENT_SECRET,
        projectKey: process.env.APP_PROJECT_KEY,
        region: process.env.APP_REGION,
        notificationUrl: process.env.APP_NOTIFICATION_URL,
    },
    oAuthScopes: {
        view: ['view_products'],
        manage: ['manage_products'],
    },
    icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
    mainMenuLink: {
        defaultLabel: 'PowerBoard Settings',
        uriPath: 'settings',
        labelAllLocales: [],
        permissions: ['ViewProducts'],
    },
    submenuLinks: [
        {
            uriPath: 'settings',
            defaultLabel: 'Live connection',
            labelAllLocales: [],
            permissions: ['ViewProducts'],
        },
    ],
    headers: {
        csp: {
            'connect-src': ['\'self\'', 'https://api.europe-west1.gcp.commercetools.com https://auth.europe-west1.gcp.commercetools.com/oauth/token https://auth.europe-west1.gcp.commercetools.com https://mc-api.europe-west1.gcp.commercetools.com/graphql https://jsp-test-six.vercel.app/ https://mc-api.europe-west1.gcp.commercetools.com https://api.powerboard-commercetool-app.jetsoftpro.dev http://localhost:3003 http://localhost:3001 https://api-sandbox.paydock.com https://api.paydock.com https://api.powerboard.commbank.com.au https://api.preproduction.powerboard.commbank.com.au'],
            'script-src': ['\'self\'', '\'unsafe-inline\'', '\'unsafe-eval\'', 'https://api.europe-west1.gcp.commercetools.com https://auth.europe-west1.gcp.commercetools.com/oauth/token https://auth.europe-west1.gcp.commercetools.com  https://mc-api.europe-west1.gcp.commercetools.com/graphql https://mc-api.europe-west1.gcp.commercetools.com  https://api.powerboard-commercetool-app.jetsoftpro.dev https://jsp-test-six.vercel.app http://localhost:3001 http://localhost:3003 https://api-sandbox.paydock.com https://api.paydock.com https://api.powerboard.commbank.com.au https://api.preproduction.powerboard.commbank.com.au'],
            'style-src': ['\'self\'', '\'unsafe-inline\'', 'https://fonts.googleapis.com'],
            'img-src': ['\'self\'', 'data:', 'https:'],
            'font-src': ['\'self\'', 'https://fonts.gstatic.com'],
            'frame-src': ['\'self\'', 'https://api.europe-west1.gcp.commercetools.com https://auth.europe-west1.gcp.commercetools.com/oauth/token https://auth.europe-west1.gcp.commercetools.com  https://jsp-test-six.vercel.app http://localhost:3003 http://localhost:3001 https://api-sandbox.paydock.com https://api.paydock.com'],
        },
    },
};

export default config;
