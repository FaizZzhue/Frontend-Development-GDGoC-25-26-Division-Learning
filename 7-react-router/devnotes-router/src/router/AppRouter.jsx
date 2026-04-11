import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";

import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/Overview";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />

        <Route path="projects" element={<Projects />}>
          <Route path=":id" element={<ProjectDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}
