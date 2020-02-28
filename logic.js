const Contact = require('./config');
const assert = require('assert');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactManger', 
{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const addContact = (contact) => {
    Contact.create(contact, (err) => {
        assert.equal(null, err);
        console.log('New contact added');
        db.close();
    });
}


const searchContact = (name) => {
    const search = new RegExp(name, 'i');
    Contact.find({$or: [{firstname: search }, {lastname: search }]})
    .exec((err, contact) => {
      assert.equal(null, err);
      console.info(contact);
      console.info(`${contact.length} similar contacts.`);
      db.close();
    });
    
  };

  const deleteContact = (_id) => {
    Contact.deleteOne({ _id })
    .exec((err, status) => {
      assert.equal(null, err);
      console.info('Deleted successfully');
      db.close();
    });
  };


  const getAllContacts = () => {
    Contact.find({})
    .exec((err, contacts) => {
      assert.equal(null, err);
      console.info(contacts);
      console.info(`You currently have ${contacts.length} contacts.`);
      db.close();
    });
  };

  module.exports = {addContact, searchContact, deleteContact, getAllContacts};