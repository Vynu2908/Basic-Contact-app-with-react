import React from "react";

const ContactList = (props) => {
    console.log(props);

    const rendercontactlist = props.contacts.map((contact) => {
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                    <i className="trash alternate outline icon"></i>
                </div>
            </div>
        );
    });
 return <div className="ui celled list">{rendercontactlist}</div>
};



export default ContactList;