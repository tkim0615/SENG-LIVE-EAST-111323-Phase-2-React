import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);  //making  static project data as stateful objects.. so user can add new projects and we can pass around
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const onHandleSearch = (e) =>{
    setSearchQuery(e.target.value);
  }
  const onHandleClick = () => setIsDarkMode(!isDarkMode);

  const handleClick = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
      console.log(projects)
  };
  return (
    <div className={isDarkMode? 'App': 'App light'}>
      <Header isDarkMode={isDarkMode} onHandleClick={onHandleClick}/>
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button> 
      <ProjectList onHandleSearch={onHandleSearch} searchQuery={searchQuery}  projects={projects} />                       
    </div>
  );
};

export default App;


// // when button is clicked, fetch the projects from the server
//  and pass them to the ProjectList component and pass them to the ProjectList component */
