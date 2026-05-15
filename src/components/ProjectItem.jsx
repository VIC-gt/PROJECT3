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