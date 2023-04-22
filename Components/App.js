import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import Contactlist from "./Contactlist";


function App() {
  const contacts = [
    {
      id:"1",
      name: "Vynu",
      email:"vynu@gmail.com",

    },
    {
      id:"2",
      name: "Vamsi",
      email:"vamsi@gmail.com",

    },
  ];
  return (
    <div className="ui container">
    <Header />
    <AddContact />
    <Contactlist contacts ={contacts} />
    </div>
  );
}

export default App;
