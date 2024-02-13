import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export function CheckAuthentication(element: ReactNode) {
    return (
      localStorage.getItem("accessToken") ? 
      (element) : 
      (<Navigate to='/' />)
    );
  }