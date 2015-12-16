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

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
