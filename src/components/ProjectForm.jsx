import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    onAddProject(formData);
    setFormData({ title: '', description: '' }); // Reset form
  };

  return (
    <section className="form-section">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Title</label>
          <input 
            type="text" 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>
        <div className="input-group">
          <label>Description</label>
          <textarea 
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          ></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default ProjectForm;