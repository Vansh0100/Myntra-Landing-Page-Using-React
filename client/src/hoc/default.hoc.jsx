import React from "react";
import { Route } from "react-router-dom";
// Importing Layouts
import DefaultLayout from "../layouts/default.layout";

function DefaultHoc({ component: Component, ...rest }) {
  console.log(Component);
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      ></Route>
    </>
  );
}

export default DefaultHoc;
