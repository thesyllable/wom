'use strict';


var express = require('express');
var app = express();
var JiraClient = require('jira-connector');
var fs = require("fs");

var jira = new JiraClient( {
    host: 'pmtest.atlassian.net',
    basic_auth: {
        username: 'admin',
        password: 'j86tgxsa'
    }
});

app.get('/', function (req, res) {
  res.sendFile('gameofwar.html',{ root : __dirname});
});

app.get('/jira.json', function (req, res) {
  res.sendFile('jira.json',{ root : __dirname});
});


var server = app.listen(4001, function () { //process.env.PORT
  var host = server.address().address;
  var port = server.address().port;

  console.log('WOM is listening at http://%s:%s', host, port);
});


var jira = jira.issue.getIssue({
      issueKey: 'PM-1'
  }, function(error, issue) {

      var jiraDetails = {
      	summary: issue.fields.summary,
      	assignee: issue.fields.assignee.displayName,
      	resolution: issue.fields.resolution,
      	status: issue.fields.status.name    	
      }
      	console.log(jiraDetails);
      var jiraJSON = JSON.stringify(jiraDetails);
    	fs.writeFile('jira.json', jiraJSON, function (err) {
    		  if (err) throw err;
  				console.log('It\'s saved!');
    	});
    	console.log(jiraJSON);
}); 


