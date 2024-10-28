import {useState} from "react";
import './DynamicStyling.css';

export default function DynamicStyling() {
    const [buttonClicked, setButtonClicked] = useState(false);

    function handleClicked(){
        setButtonClicked(isHighlighted => !isHighlighted);
    }

    return (
        <div>
            <p className={buttonClicked ? 'active' : undefined}>Style me!</p>
            <button onClick={handleClicked}>Toggle style</button>
        </div>
    );

}