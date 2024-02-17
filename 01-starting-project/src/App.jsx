import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";


function App() {
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
      </main>
    </div>
  );
}

export default App;
