export default function TabButton({children, onSelect}) {
    console.log('TabButton COMPONENT RENDERING');

    return (
        <li>
            {/*handlclick without parantheses: React executes first, when button is clicked
             = passing as value
            */}
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}