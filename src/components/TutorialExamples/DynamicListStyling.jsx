import React from 'react';

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

function Todo({text}) {
    return <li>{text}</li>;
}

// don't change the Component name "App"
export default function DynamicListStyling() {

    return (
        <ul>
            {DUMMY_TODOS.map((item) => <Todo key={item} text={item} />)}
        </ul>
    )
}