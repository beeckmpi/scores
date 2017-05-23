// import core tools
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

// declare MongoDB collection here
//
// Read more: http://guide.meteor.com/collections.html
const Leagues = new Meteor.Collection('leagues');
const Images = new Mongo.Collection('images');


// We can publish some data (here all)
// we will be able to subscribe to the data later in the client app
// remember that this is not secured, all can subscribe to all data from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/data-loading.html
Meteor.publish('leagues', function () {
  return Leagues.find();
});

Meteor.publish('user', function () {
  return Meteor.users.find({_id: this.userId});
});

Meteor.publish('images', function() {
  return Images.find({});
})

// We can also use server side methods and call them from our client app
// here we just fetch all documents from the collection
// again, remember that this is not secured, all can call it from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/methods.html
Meteor.methods({
  getLeague(id) {
    return Todo.findOne(id);
  },
  getAllLeagues() {
    return Leagues.find().fetch();
  },
  addLeague(data) {
    return Leagues.insert(data);
  },
  removeLeague(id) {
    return Leagues.remove({_id: id});
  },
  editLeagues(id, data) {
    return Leagues.update({_id: id}, {$set: data});
  },
  'uploadImage': function (fileData) {
    return Images.insert({data:fileData})
   }
});


// Deny all client-side updates on the Lists collection
// Read more about security stuff: http://guide.meteor.com/security.html
Leagues.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

// Example user - just a simple example without validation etc.
// Read more at: https://guide.meteor.com/accounts.html
Meteor.startup(() => {
  const theOnlyUser = Meteor.users.find().fetch();
  if (!theOnlyUser.length) {
    Accounts.createUser({
      username: 'admin',
      password: 'pass'
    });
  }
});
