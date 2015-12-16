import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/links');
  this.post('/links', function(db, request) {
    if(request.requestHeaders.Authorization === 'Bearer abc123') {
      var data = JSON.parse(request.requestBody).link;
      return { link: db.links.insert(data) };
    } else {
      return new Mirage.Response(401, {Status: '401 Unauthorized'}, {
        error: 'invalid_grant',
        error_description: 'The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.'
      });
    }
  });
  this.post('/token', function(db, request) {
    console.log(request);
    if(request.requestBody === 'grant_type=password&username=test&password=pass') {
      return {
        access_token: 'abc123',
        token_type: 'bearer',
        expires_in: 7200,
        refresh_token: 'zyz789',
        created_at: new Date().getTime()
      }
    } else {
      return new Mirage.Response(401, {Status: '401 Unauthorized'}, {
        error: 'invalid_grant',
        error_description: 'The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.'
      });
    }
  });
}
