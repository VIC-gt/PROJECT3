import { useState } from "react";
// We add "/components/" to the path so Vite knows where to look
import ProjectForm from "./components/ProjectForm.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProjectList from "./components/ProjectList.jsx";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the first project" },
    { id: 2, title: "Project 2", description: "Description of the second project" },
    { id: 3, title: "Project 3", description: "Description of the project" }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    const projectWithId = { 
      ...newProject, 
      id: Date.now() 
    };
    setProjects([...projects, projectWithId]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <h1>Personal Project Showcase App</h1>
      </header>
      
      <main>
        <ProjectForm onAddProject={addProject} />
        
        <hr className="divider" />
        
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        
        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  );
}

export default App;