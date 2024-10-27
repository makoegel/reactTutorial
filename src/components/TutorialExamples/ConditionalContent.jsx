import {useState} from 'react';
import './ConditionalContent.css';
import Button from "./Button.jsx";

export default function ConditionalContent() {

    const [selectedAction, setSelectedAction] = useState('delete');

    function handleSelect(selectedButton) {
        setSelectedAction(selectedButton)
        console.log(selectedButton);
    }

    let content = <Button onSelect={() => handleSelect('proceed')}>Delete</Button>

    if (selectedAction === 'proceed') {
        content = (
            <div>
                <div data-testid="alert" id="alert">
                    <h2>Are you sure?</h2>
                    <p>These changes can't be reverted!</p>
                    <Button onSelect={() => handleSelect('delete')}>Proceed</Button>
                </div>
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    );
}