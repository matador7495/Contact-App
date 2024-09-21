import { createContext, useReducer } from "react";

const ContactContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((contact) => contact.id !== action.payload);
    default:
      throw new Error("Action not found");
  }
};

const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(reducer, []);
  console.log(contacts);
  return <ContactContext.Provider value={{ contacts, dispatch }}>{children}</ContactContext.Provider>;
};

export { ContactContext, ContactProvider };
