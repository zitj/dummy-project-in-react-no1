import React, { useState } from 'react';
import Form from '../Form/Form';
import './Card.css';

const Card = () => {
    let dummyData = {
        name: 'Name',
        age: 'age',
        fruit: 'fruit',
    };
    const [defaultData, setNewData] = useState(dummyData);

    const collectingFormData = (data) => {
        setNewData(data);
    };
    return (
        <div className="card">
            <h1>
                Hello my name is {defaultData.name} ({defaultData.age})
            </h1>
            <h2>and my favorite fruit is {defaultData.fruit}</h2>
            <Form collectData={collectingFormData}></Form>
        </div>
    );
};

export default Card;
