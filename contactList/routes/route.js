// importing
const express = require('express');
const router = express.Router();
// importing contact schema
const contact = require('../models/contacts');

// making routes... as here /api will point to here 
// this will bee /api/contacts
// retrieve contacts
router.get('/contacts', function(req, res, next){
    contact.find(function(err, contacts){ // fetching contacts
        res.json(contacts);  // responding with contact list
    });
});

// add contacts
router.post('/newContact', function(req, res, next){
    // logic to adding contacts
    let newContact = new contact({  // new contact
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        address : req.body.address,
        phone : req.body.phone
    });
    newContact.save(function(err, contact){  // saving contact
        if(err){
            res.json({msg: 'Failed to add contacts'});  // on error
        }
        else{
            res.json({msg: newContact + 'Contact added successfully'}); // on success
        }
    });
});

// deleting contacts based on id
router.delete('/delContact/:id', function(req, res, next){
    // logic to deleting contacts
    contact.deleteOne({_id: req.params.id}, function(err, result){  // .remove is deprecated
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

// exporting is necessary
module.exports = router;