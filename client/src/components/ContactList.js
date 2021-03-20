import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getContacts, } from "../JS/actions/contact"
import ContactCard from './ContactCard'
import {Spinner, Button} from "react-bootstrap";

const ContactList = () => {

    const dispatch = useDispatch()
    const contactList = useSelector((state)=> state.contactReducer.contactList)
    const load = useSelector((state)=>state.contactReducer.load);
    console.log(contactList);
    useEffect(() => {
        dispatch(getContacts())
    }, [])
    return (
      <div style={{ display: "flex", justifyContent: "space-between", padding:"40px", flexWrap:"wrap"}}>
        {load ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : (
          contactList.map((el) => (
            <h2>
              <ContactCard contact={el} key={el._id} />{" "}
            </h2>
          ))
        )}
      </div>
    );
}

export default ContactList
