import React from "react";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const ContactDetails = () => {

    const { id } = useParams()

    return (
        <div>
            <h1>Exebindo mais info do contato {id}</h1>
        </div>
    )
}

export default ContactDetails