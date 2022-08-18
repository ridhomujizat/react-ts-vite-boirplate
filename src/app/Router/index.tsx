import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ListRoute from "./ListRoute";

export default function IndexRoute() {
  return (
    <Routes>
      {ListRoute.map((val) => (
        <Route
          index={val.index}
          path={val.path}
          element={
            <Suspense>
              <val.comp />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
