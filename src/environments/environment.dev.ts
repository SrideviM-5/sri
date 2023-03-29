export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '9c247bb6-bca1-42dd-a9d0-ddfde2de7777',
        }
    },
    apiConfig: {
        scopes: ['https://sritestb2caad.onmicrosoft.com/helloapi/demo.read'],
        uri: 'https://sritestb2caad.azurewebsites.net/hello'
    },
    b2cPolicies: {
        names: {
            signUpSignIn: "b2c_1_susi",
            resetPassword: "b2c_1_reset",
            editProfile: "b2c_1_edit_profile"
        },
        authorities: {
            signUpSignIn: {
                authority: 'https://sritestb2caad.b2clogin.com/sritestb2caad.onmicrosoft.com/b2c_1_susi'
            },
            resetPassword: {
                authority: 'https://sritestb2caad.b2clogin.com/sritestb2caad.onmicrosoft.com/b2c_1_reset'
            },
            editProfile: {
                authority: "https://sritestb2caad.b2clogin.com/sritestb2caad.onmicrosoft.com/b2c_1_edit_profile"
            }
        },
        authorityDomain: "sritestb2caad.b2clogin.com"
    }
};
