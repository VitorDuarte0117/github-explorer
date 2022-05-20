import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const Increment = () => {
        setCounter(counter + 1);
    };
    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}>
                Increment
            </button>
        </div>
    );
};

export default Counter;
