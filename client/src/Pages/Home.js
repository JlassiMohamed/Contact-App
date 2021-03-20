import React from 'react'
import {useDispatch} from "react-redux"
import ContactList from '../components/ContactList'
import { toggleAdd } from '../JS/actions/edit'
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button";

const Home = () => {
    // const dispatch = useDispatch()
    const dispatch = useDispatch()
    return (
      <div>
        <Button variant="outline-info" onClick={() => dispatch(toggleAdd())}>
          <Link to="/add">Add contact</Link>
        </Button>
        {/* <button>Contact List</button> */}
        <ContactList />
      </div>
    );
}

export default Home
