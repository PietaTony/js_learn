var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
//var SCOPES = ['https://www.googleapis.com/auth/calendar.readonly',
//  'https://www.googleapis.com/auth/calendar'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';

var test = 'https://slack.com/api/users.admin.invite?';
var test_token = 'xoxp-10115058306-10114938819-314247991574-29c0c86f21d89c10909c6189a49cf27c';
var test_channels = 'C0A3CJ62U';

exports.list = function list(){
  fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  authorize(JSON.parse(content), listEvents);
  });
}

function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
  });
}

var request = require("request")

var data = {
  'ok':'null',
  'error':'null',
};


function listEvents(auth) {
  var test_return = test + 'token=' + test_token + '&email=b06705054@ntu.edu.tw' + '&channels=' + test_channels;
  console.log(test_return);
request({
    url: test_return,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        data=body;
        console.log(data.ok); // Print the json response
    }
})
 // console.log(request.items);
// var date = JSON.parse(request.body);
//data = JSON.stringify(request.body);

//  console.log(getJSON(test_return));

}