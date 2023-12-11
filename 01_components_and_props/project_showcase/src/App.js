import Header from "./components/Header"
import ProjectList from "./components/ProjectList";
import projects from "./projects.js"

function App() {

  console.log(projects)

  return( 
      <div className="App">Project showcase hello
        <Header />
        <ProjectList 
              projects={projects}
              num={3}
              str="hello"/>
      </div>
  );
}

export default App;
