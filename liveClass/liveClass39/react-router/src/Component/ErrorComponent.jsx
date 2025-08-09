import React from "react";
import { useRouteError } from "react-router";

export const ErrorComponent = () => {
  const handelError = useRouteError();
  return (
    <>
      {handelError && (
        <div>
          <h2 style={{ color: "red", textAlign: "center", margin: "50px" }}>
            No Data Found ... !
          </h2>
        </div>
      )}
    </>
  );
};
