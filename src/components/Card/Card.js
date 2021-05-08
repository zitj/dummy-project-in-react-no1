import React from 'react';
import Form from '../Form/Form';
import './Card.css';

const Card = (props) => {
    let collectedData;
    const collectingFormData = (data) => {
        collectedData = {
            ...data,
        };
        console.log(collectedData);
        // eslint-disable-next-line react/prop-types
        props.data(collectedData);
    };
    return (
        <div className="card">
            <Form collectData={collectingFormData}></Form>
        </div>
    );
};

export default Card;
