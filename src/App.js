import './App.css';
import React, { useState } from 'react';
import Card from './components/Card/Card';
// import Form from './components/Form/Form';

function App() {
    let dummyData = {
        name: 'Milovan',
        age: 31,
        fruit: '🍍',
    };
    const [defaultData, setNewData] = useState(dummyData);

    const getData = (data) => {
        console.log(data);
        setNewData(data);
    };

    return (
        <div>
            <h1>
                Hello world my name is {defaultData.name} ({defaultData.age})
            </h1>
            <h2>My favourite fruit is {defaultData.fruit}</h2>
            <Card data={getData} />
        </div>
    );
}

export default App;
