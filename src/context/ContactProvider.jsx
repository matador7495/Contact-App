import { createContext, useReducer } from "react";

const ContactContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      throw new Error("Action not found");
  }
};

const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(reducer, []);

  const addContact = (contact) => {
    dispatch({ type: "ADD", payload: contact });
  };

  return <ContactContext.Provider value={{ contacts, addContact }}>{children}</ContactContext.Provider>;
};

export { ContactContext, ContactProvider };
