import React from 'react';

export const About = () => {
  return (
    <div className="container my-4">
      <h2>About This Todo App</h2>
      <p>This is a simple yet powerful Todo List app built with React.</p>

      <h4>Features</h4>
      <ul>
        <li>📝 Add, delete, and manage tasks</li>
        <li>✅ Mark tasks as completed</li>
        <li>💾 Saves todos to localStorage</li>
        <li>🎨 Responsive UI with Bootstrap</li>
      </ul>

      <h4>How to Use</h4>
      <ol>
        <li>Click "Home" to manage your tasks</li>
        <li>Use the checkbox to mark tasks complete</li>
        <li>Click "Delete" to remove tasks</li>
      </ol>

      <h4 className="mt-4">About the Developer</h4>
      <p>
        This project was created by <strong>Prajwal Vithale</strong> as a way to practice React fundamentals, routing,
        state management, and local storage. It's a beginner-friendly project, ideal for showcasing on GitHub.
      </p>
      <p>
        Want to connect? <a href="https://github.com/PrajwalVithale" target="_blank" rel="noreferrer">Visit my GitHub</a>
      </p>
    </div>
  );
};
