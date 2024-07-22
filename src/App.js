import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/pages/taskPage";
import TaskDetail from "./components/taskdetail";
import "./App.css";
import Counter from "./components/pages/counterPage";
import MovieListPage from "./components/pages/movieListPage";
import MovieDetail from "./components/pages/movieDetailPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/task" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/" element={<Counter />} />
          <Route path="/movie/:name" element={<MovieDetail />} />
          <Route path="/movie" element={<MovieListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
