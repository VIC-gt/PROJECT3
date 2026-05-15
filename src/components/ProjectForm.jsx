import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required!");
    
    onAddProject({ title, description: desc });
    setTitle('');
    setDesc('');
  };

  return (
    <form className="cool-form" onSubmit={handleSubmit}>
      <h3>New Masterpiece</h3>
      <input 
        placeholder="Project Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Brief description..." 
        value={desc} 
        onChange={e => setDesc(e.target.value)}
      />
      <button type="submit">Deploy Project</button>
    </form>
  );
}

export default ProjectForm;