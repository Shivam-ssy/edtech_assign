import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Landing from "./components/Landing.jsx";
import SignUp from "./components/SignUp.jsx";
import "./index.css";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import ProtectedRoute from "./components/Protected.jsx";
import ShowContextProvider from "./contextApi/ShowContextProvider.jsx";
import PaymentReview from "./components/PaymentReview.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
          path="/signin"
          element={
            <ProtectedRoute>
             <Login/>
            </ProtectedRoute>
          }
        />
      <Route
          path="/home/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      <Route
          path="/payment"
          element={
            <ProtectedRoute>
             <PaymentReview/>
            </ProtectedRoute>
          }
        />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
 
<ShowContextProvider>
      <RouterProvider router={router} />
      </ShowContextProvider>

  </React.StrictMode>
  
);
