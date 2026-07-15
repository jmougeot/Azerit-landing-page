import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import { Landing } from "./pages/Landing";

// Only the landing page is needed for the initial paint; split the rest.
const Try = lazy(() => import("./pages/Try").then((m) => ({ default: m.Try })));
const Admin = lazy(() => import("./pages/Admin").then((m) => ({ default: m.Admin })));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/try" element={<Try />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
