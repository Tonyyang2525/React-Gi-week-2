import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();

  // Load tasks from localStorage if available
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Find the task with the given id
  const initialTask = tasks.find((task) => task.id === parseInt(id)) || {
    id: parseInt(id),
    title: `Task ${id}`,
    description: `Description for Task ${id}`,
  };

  const [task, setTask] = useState(initialTask);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited task
    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
    };

    // Update the task in the tasks array
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    // Save the updated tasks array to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTask(updatedTask);
    setIsEditing(false);
    alert(`Task ${id} updated successfully!`);
  };

  const handleCancel = () => {
    // Cancel editing
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    alert(`Deleting Task ${id}`);

    // Remove the task from the tasks array
    const updatedTasks = tasks.filter((task) => task.id !== parseInt(id));

    // Save the updated tasks array to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Navigate back to task list
  };

  return (
    <div className="task-detail">
      <h2>Task Detail</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      <Link to="/task">Back to Task List</Link>
    </div>
  );
};

export default TaskDetail;
