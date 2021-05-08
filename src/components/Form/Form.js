import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredFruit, setEnteredFruit] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const fruitChangeHandler = (event) => {
        setEnteredFruit(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        let newData = {
            name: enteredName,
            age: enteredAge,
            fruit: enteredFruit,
        };
        if (newData.name === '' || newData.age === '' || newData.fruit === '') {
            alert('You must fill all the entries.');
            return;
        }
        // eslint-disable-next-line react/prop-types
        props.collectData(newData);

        setEnteredName('');
        setEnteredAge('');
        setEnteredFruit('');
    };

    return (
        <div>
            <form action="submit" onSubmit={submitHandler}>
                <div className="labelAndInput">
                    <label htmlFor="">Your full name</label>
                    <input
                        type="text"
                        onChange={nameChangeHandler}
                        value={enteredName}
                    />
                </div>
                <div className="labelAndInput">
                    <label htmlFor="">Your age</label>
                    <input
                        type="number"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                </div>
                <div className="labelAndInput">
                    <label htmlFor="">Your favorite fruit</label>
                    <select
                        name="nationality"
                        id=""
                        onChange={fruitChangeHandler}
                        value={enteredFruit}
                    >
                        <option value="🍎">Apple 🍎</option>
                        <option value="🍇">Grapes 🍇</option>
                        <option value="🍌">Banana 🍌</option>
                        <option value="🍒">Cherries 🍒</option>
                        <option value="🍍">Pineapple 🍍</option>
                        <option value="🍉">Watermelon 🍉</option>
                    </select>
                </div>
                <button type="submit">Save changes</button>
            </form>
        </div>
    );
};

export default Form;
