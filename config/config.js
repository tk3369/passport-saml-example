module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 3000
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/login/callback',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
        issuer: 'localhost',
        cert: process.env.SAML_CERT || 'MIIDhjCCAm4CCQCMHNhxUI2H1TANBgkqhkiG9w0BAQUFADCBhDELMAkGA1UEBhMCTk8xEjAQBgNVBAcTCVRyb25kaGVpbTETMBEGA1UEChMKVW5pbmV0dCBBUzEOMAwGA1UECxMFRkVJREUxFTATBgNVBAMTDGlkcC5mZWlkZS5ubzElMCMGCSqGSIb3DQEJARYWbW9yaWEtZHJpZnRAdW5pbmV0dC5ubzAeFw0wODA5MDUxMTU0MzNaFw0xODA3MTUxMTU0MzNaMIGEMQswCQYDVQQGEwJOTzESMBAGA1UEBxMJVHJvbmRoZWltMRMwEQYDVQQKEwpVbmluZXR0IEFTMQ4wDAYDVQQLEwVGRUlERTEVMBMGA1UEAxMMaWRwLmZlaWRlLm5vMSUwIwYJKoZIhvcNAQkBFhZtb3JpYS1kcmlmdEB1bmluZXR0Lm5vMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4fTsmIsKVGtniXddnerSeiLeAZAlAOL8v+ebzVzYcpTJzMHrplD+lF2tXxRgs7IGEw3t2zRCtxnGbiGkXPW+oCs4T989z+Sq8nh7Lff/XlyK+jQ7BtfC8RUYQ+eNEQy0Fif+81JyPbiwZovbiL4WrK1GOG81/2CF7rvwyXJkDD1YXJ5W18/c06YLfYJjuzZgEoCVRq6ecgQyPKg1xwIpW2GpkKOBXA7oKWtev+xcmSiLZwZE96mSHjty0L+wW6NUuf2/8VSCc4IED0EbzqFUoeHuGXqPak+tu9+VpP6vmmyp4gSCxsmWtoKm7UC8P1QeCyZxwQaoGlIp78wsE5ao5wIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQACUWuuirUSwDWksdkwKuqsNttnNmivwUMLtKDjHbMcwVK/b4qWjrAjfmJXxamUSYlnGjeoiqSQQuc3/qHCPAZUnN8VqXcZUCBXWjMO7Y/AnnsFKHpkYm51jWckjudeyfUr4UnH7te0OuUrGRIVrRRg3DqLdgrcbkJ98JyT97hnaDMke4qNVwrQFF+yvxYs1aYkILySBB/KPGSTh5sxJovcyWd7GY4ad5nH5oEjXF1yZzndmUuHGlTTzk6SGzmUJgqKyba+KJ/jauy6qNC1gPqfnbntWKDkE9a9ow8tlsi3jHI9AZu9U6LnOvTJ8MjhyXOEByCaDnTpK8JiZr6JvCaV'
      }
    }
  }
};
