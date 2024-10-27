import {useState} from 'react';
import './ConditionalContent.css';
import Button from "./Button.jsx";

export default function ConditionalContent() {

    const [isDeleting, setIsDeleting] = useState(false);

    function deleteHandler() {
        setIsDeleting(true);
    }

    function proceedHander() {
        setIsDeleting(false);
    }

    let warning;

    if (isDeleting) {
        warning = (
            <div data-testid="alert" id="alert">
                <h2>Are you sure?</h2>
                <p>These changes can't be reverted!</p>
                <button onClick={proceedHander}>Proceed</button>
            </div>
        );
    }

    return (
        <div>
            {warning}
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}