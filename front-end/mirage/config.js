export default function() {

  this.get('/followers', () => {
    return {
      data: [{
        name: "Johannes Climacus",
        handle: "ckhonson",
        avi: "https://pbs.twimg.com/profile_images/741335358755856384/Ii_sus0d.jpg"
      }, {
        name: "Joe Rogan",
        handle: "joerogan",
        avi: "https://pbs.twimg.com/profile_images/552307347851210752/vrXDcTFC.jpeg"
      }, {
        name: "I D E O L O G Y",
        handle: "PURE_IDEOLOGY",
        avi: "https://pbs.twimg.com/profile_images/726362741863116803/zsgfXPyY.jpg"
      }]
    }
  })

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
