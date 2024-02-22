import { CORE_CONCEPTS } from "./data";
import Header from "./components/header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/tabButton.jsx";


function App() {
  function handleSelect() {
    console.log('Hello World - select' );
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}>
            </CoreConcept>

            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}>
            </CoreConcept>

            <CoreConcept {...CORE_CONCEPTS[2]}>
            </CoreConcept>

            <CoreConcept {...CORE_CONCEPTS[3]}>
            </CoreConcept>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
            <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
            
            </menu>
            Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
