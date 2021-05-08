import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div>
            <form action="">
                <div className="labelAndInput">
                    <label htmlFor="">Your full name</label>
                    <input type="text" />
                </div>
                <div className="labelAndInput">
                    <label htmlFor="">Your age</label>
                    <input type="number" />
                </div>
                <div className="labelAndInput">
                    <label htmlFor="">Your favorite fruit</label>
                    <select name="nationality" id="">
                        <option value="apple">Apple 🍎</option>
                        <option value="grapes">Grapes 🍇</option>
                        <option value="banana">Banana 🍌</option>
                        <option value="cherries">Cherries 🍒</option>
                        <option value="pineapple">Pineapple 🍍</option>
                        <option value="watermelon">Watermelon 🍉</option>
                    </select>
                </div>
                <button type="submit">Save changes</button>
            </form>
        </div>
    );
};

export default Form;
