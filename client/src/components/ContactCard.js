import React from 'react'
import { deleteContact, getContact } from "../JS/actions/contact";
import {useDispatch} from "react-redux"
import { toggleEdit } from '../JS/actions/edit';
import { Link } from "react-router-dom";
import {Button, Card} from "react-bootstrap";


const ContactCard = ({ contact }) => {
  const dispatch = useDispatch()
  const handleEdit = () => {
    dispatch(toggleEdit())
    dispatch(getContact(contact._id))
  }
  return (
    <div>
      <Card style={{ width: "18rem" }} border="primary">
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {contact.phone}
          </Card.Subtitle>
          <Card.Subtitle>{contact.email}</Card.Subtitle>
          <Button variant="outline-primary" onClick={handleEdit}>
            <Link to="/edit">Edit</Link>
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => dispatch(deleteContact(contact._id))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard
