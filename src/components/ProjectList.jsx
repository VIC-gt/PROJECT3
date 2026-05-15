// ProjectList.jsx
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length > 0 ? (
        projects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

export default ProjectList;

// ProjectItem.jsx
function ProjectItem({ project }) {
  return (
    <div className="project-card">
      <div className="placeholder-icon">X</div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;