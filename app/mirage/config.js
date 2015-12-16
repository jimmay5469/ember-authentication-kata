import Mirage from 'ember-cli-mirage';

let USERNAME = 'test';
let PASSWORD = 'pass';
let TOKEN = 'abc123';

function getUnauthorizedResponse() {
  return new Mirage.Response(401, {Status: '401 Unauthorized'}, {
    error: 'invalid_grant',
    error_description: 'The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.'
  });
}
function getTokenResponse() {
  return {
    access_token: TOKEN,
    token_type: 'bearer',
    expires_in: 7200,
    refresh_token: 'zyz789',
    created_at: new Date().getTime()
  };
}

export default function() {
  this.get('/links');
  this.post('/links', function(db, request) {
    if(request.requestHeaders.Authorization === `Bearer ${TOKEN}`) {
      var data = JSON.parse(request.requestBody).link;
      return { link: db.links.insert(data) };
    } else {
      return getUnauthorizedResponse();
    }
  });
  this.post('/token', function(db, request) {
    if(request.requestBody === `grant_type=password&username=${USERNAME}&password=${PASSWORD}`) {
      return getTokenResponse();
    } else {
      return getUnauthorizedResponse();
    }
  });
}
