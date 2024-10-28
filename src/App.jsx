//react Hook (start with use, are called inside of react functions or other hooks)
import {useState, Fragment} from 'react';
//named Import with curly braces
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {EXAMPLES} from "./data-with-examples.js";

function App() {
    /*call Hook-Functions always on the top level of the function
    * counter:     current state,
    * setCounter:  updating function
    * (0):         initial value
    * const [counter, setCounter] = useState(0);
    * const is recreated every time it is used
    * */
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        /*selectedButton => 'components', 'jsx', 'props', 'state*/
        setSelectedTopic(selectedButton);
        // logs the old state
        console.log({selectedTopic});
    }

    console.log('APP COMPONENT RENDERING');

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) tabContent = (<div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
                     <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
    </div>)

    return (<Fragment>
        <Header/>
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
                </ul>
            </section>
            <section id='examples'>
                <h2>Examples</h2>
                <menu>
                    {/*Component-Composition*/}
                    {/*anonymous function is executed when button is clicked*/}
                    <TabButton
                        isSelected={selectedTopic === 'components'}
                        onSelect={() => handleSelect('components')}>Components
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'jsx'}
                        onSelect={() => handleSelect('jsx')}>JSX
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'props'}
                        onSelect={() => handleSelect('props')}>Props
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'state'}
                        onSelect={() => handleSelect('state')}>State
                    </TabButton>
                </menu>
                {tabContent}
            </section>
        </main>
    </Fragment>);
}

export default App;
