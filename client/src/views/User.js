import React from "react";
import NavBar from "../components/navbar/NavBar";

const User = ({children}) => {
  return (
    <>
      <NavBar />
      <div className="vh-100">
        <div className="h-100">
          <div role="main" className="container">
            <div className="d-flex justify-content-between align-items-center py-2">
              <h1 className="m-3">Proyecto - Redes 2 - G18</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default User;