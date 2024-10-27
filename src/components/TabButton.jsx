export default function TabButton({children, onSelect, isSelected}) {

    return (
        <li>
            {/*handlclick without parantheses: React executes first, when button is clicked
             = passing as value
            */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
            {/*<button className={isSelected ? 'active' : ' '} onClick={onSelect}>{children}</button>*/}


        </li>
    );
}