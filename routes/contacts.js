const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact")

const controllers = require("../controllers/contact.controllers")

// test routing
router.get("/test", (req, res) => {
  res.send("hello");
});

// post a contact
// get all contacts
// get contact by id
// delete contact by id
// update contact by id

/*
@method: POST
@desc: post a contact
@path: http://localhost:5000/api/contact/
@params: Body
*/
router.post("/", controllers.postContact);

/*
@method: GET
@desc: get all contacts
@path: http://localhost:5000/api/contact/
@params: no
*/
router.get("/", controllers.getAllContacts)

/*
@method: GET
@desc: delete one contact
@path: http://localhost:5000/api/contact/:id
@params: id
*/
router.get("/:id", controllers.getOneContact);

/*
@method: GET
@desc: delete one contact by id
@path: http://localhost:5000/api/contact/:id
@params: id
*/
router.delete("/:id", controllers.deleteOneContact);

/*
@method: PUT
@desc: update a contact by id
@path: http://localhost:5000/api/contact/:id
@params: id, body
*/
router.put("/:id", controllers.updateOneContact);


module.exports = router;