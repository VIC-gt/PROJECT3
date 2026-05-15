import { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectForm.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProjectList from "./components/ProjectList.jsx";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("my_portfolio");
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "Weather API App", description: "Built with React and OpenWeather API." },
      { id: 2, title: "Task Manager", description: "Full-stack CRUD application." }
    ];
  });
  
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("my_portfolio", JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => setProjects([project, ...projects]);

  const filtered = projects.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="portfolio-wrapper">
      <header className="glass-nav">
        <h1>Victor<span>.dev</span></h1>
        <SearchBar searchTerm={query} onSearchChange={setQuery} />
      </header>

      <div className="layout-grid">
        <aside className="glass-card form-sidebar">
          <h2>Create Project</h2>
          <ProjectForm onAddProject={addProject} />
        </aside>

        <main className="project-feed">
          <div className="feed-header">
            <h3>Showcase ({filtered.length})</h3>
          </div>
          <ProjectList projects={filtered} />
        </main>
      </div>
    </div>
  );
}

export default App;