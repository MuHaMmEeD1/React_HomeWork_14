import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/seletctors";
import { addContact, deleteContact } from "../../redux/slices/contactSlice";
import { ContactType } from "../../types";

const ContactProjeComponent = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const [phoneInput, setPhoneInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const newContact: ContactType = {
            phone: phoneInput,
            name: nameInput,
          };

          dispatch(addContact(newContact));
        }}
      >
        <label>Phone</label>
        <input
          type="text"
          placeholder="Phone"
          value={phoneInput}
          onChange={(e) => {
            setPhoneInput(e.target.value);
          }}
        />
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {contacts.map((c) => {
          return (
            <li key={c.phone}>
              <p>{c.phone}</p>
              <p>{c.name}</p>
              <button
                onClick={() => {
                  dispatch(deleteContact(c.phone));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactProjeComponent;
