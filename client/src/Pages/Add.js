import React, {useEffect,useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { editContact, postContact } from '../JS/actions/contact';
import {Link} from "react-router-dom"
import { Button} from "react-bootstrap";

const Add = () => {
    const [contact, setContact] = useState({});
    const dispatch = useDispatch()
    const edit = useSelector(state => state.editReducer.edit);
    const contactToEdit = useSelector(state => state.contactReducer.contact)

    useEffect(() => {
      edit
        ? setContact(contactToEdit)
        : setContact({ name: "", email: "", phone: "" });
    }, [contactToEdit, edit]);

    const handleData = () => {
        edit? dispatch(editContact(contactToEdit._id, contact)): dispatch(postContact(contact))
    }
    const handleChange = (e) =>{
        setContact({...contact, [e.target.name]:e.target.value})
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>Name</label>
        <input
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="type your name"
          style={{ width: "400px" }}
        />
        <label>Email</label>
        <input
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="email should be unique"
          style={{ width: "400px" }}
        />
        <label>Phone</label>
        <input
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="type your phone"
          style={{ width: "400px" }}
        />
        <Button
          variant={edit ? "info" : "success"}
          onClick={handleData}
          style={{ margin: "20px" }}
        >
          <Link to="/">{edit ? "Edit" : "Add"}</Link>
        </Button>
      </div>
    );
}

export default Add
