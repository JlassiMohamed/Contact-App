
// post a contact
const postContact = async (req, res) => {
  try {
    const newContact = new Contact({ ...req.body });
    const emailUsed = await Contact.findOne({ email: newContact.email });
    if (emailUsed) {
      res
        .status(400)
        .send({ message: `contact already exists email should be unique` });
      return;
    }
    const result = await newContact.save();
    res.status(200).send({ contacts: result, message: `contact posted` });
  } catch (error) {
    res.status(400).send({ message: `can not save it ${error}` });
  }
};
// get all contacts
const getAllContacts = async (req, res) => {
  try {
    const result = await Contact.find();
    res.status(200).send({ contacts: result, message: `getting all contacts` });
  } catch (error) {
    res.status(400).send({ message: `can not access data ${error}` });
  }
};
// get one contact by id
const getOneContact = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.status(200).send({ contact: result, message: `getting the contact` });
  } catch (error) {
    res
      .status(400)
      .send({ message: `there is no contact with this id, ${error}` });
  }
};
// delete one contact by id
const deleteOneContact = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    !result.n
      ? res.status(400).send({ message: `Contact was already deleted` })
      : res.status(200).send({ contact: result, message: `contact deleted` });
  } catch (error) {
    res
      .status(400)
      .send({ message: `there is no contact with this id, ${error}` });
  }
};
// update one contact by id
const updateOneContact = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.status(200).send({ contact: result, message: `Contact updated` })
      : res.status(400).send({ message: "contact is already updated" });
  } catch (error) {
    res
      .status(400)
      .send({ message: `there is no contact with this id, ${error}` });
  }
};

module.exports = controllers = { postContact, getAllContacts, getOneContact, deleteOneContact, updateOneContact };
