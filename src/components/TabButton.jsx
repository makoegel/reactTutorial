export default function TabButton({children}) {

    /*Vanilla Javascript:
    * document.querySelector('button').addEventListener('click', () => {})
    * */

    /*alternative: function clickHandler */
    function handleClick() {
        console.log('Hello World!');
    }

    return (
        <li>
            {/*handlclick without parantheses: React executes first, when button is clicked
             = passing as value
            */}
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}