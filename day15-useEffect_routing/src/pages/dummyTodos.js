import "./dummyTodos.css";
import { useState, useEffect } from "react";

// PROPS change OR `State variable change` :: Component Re-renders
const DummyTodos = () => {
    // useState hook will create the variable only on first-render
    // gives it the default value only on first-render
    console.log("COMPONENT RENDERED / RE-RENDERED");
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch("https://dummyjson.com/todos");
        const resObj = await res.json();
        setData(resObj.todos); // values of array doesn't matter
        // to react :: address or reference of object / array matters
    };

    // API call should be made only once, that is during the first render
    // useEffect(fn, dependencyArray);
    useEffect(() => {
        console.log("useffect is running now for dummyTodos");
        getData();
    }, []); // Every useEffect will always run at least on first-render

    return (
        <div>
            <a href="/">Home</a>
            <h2>Todos List from API</h2>
            <p>This is a dummy page to show todo's list by fetching API</p>
            {data.map((elem) => {
                return (
                    <div>
                        <h4>{elem.todo}</h4>
                        <p>{elem.userId}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default DummyTodos;
