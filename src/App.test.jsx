import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Portfolio Platform Tests', () => {
  it('should render the main application title', () => {
    render(<App />);
    expect(screen.getByText(/Personal Project Showcase App/i)).toBeInTheDocument();
  });

  it('should allow a user to add a new project', () => {
    render(<App />);
    
    // Find inputs
    const titleInput = screen.getByLabelText(/Title/i);
    const descInput = screen.getByLabelText(/Description/i);
    const addButton = screen.getByRole('button', { name: /Add/i });

    // Simulate typing
    fireEvent.change(titleInput, { target: { value: 'New Test Project' } });
    fireEvent.change(descInput, { target: { value: 'This was added by a test' } });
    
    // Click add
    fireEvent.click(addButton);

    // Verify it appears in the list
    expect(screen.getByText('New Test Project')).toBeInTheDocument();
  });
});