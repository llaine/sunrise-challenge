/**
 * Created by louis on 04/06/15.
 */


exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        './**/*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:9000/src/index.html',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true,
        isVerbose:true,
        includeStackTrace:true
    }
};