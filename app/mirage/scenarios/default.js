export default function(server) {
  server.create('link', {
    title: 'Ember Authentication Kata',
    url: 'https://gist.github.com/jimmay5469/927eb4a19d41343d15b0',
    description: 'Kata summary, setup, and notes'
  });
  server.create('link', {
    title: 'Ember Simple Auth',
    url: 'https://github.com/simplabs/ember-simple-auth',
    description: 'OAuth2PasswordGrant Authenticator and OAuth2Bearer Authorizer are very helpful for this kata'
  });
  server.createList('link', 10);
}
