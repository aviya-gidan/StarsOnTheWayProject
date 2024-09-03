import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./navbar/Router";
import InitializedAuth from "./auth/InitializedAuth"
import React from "react";
import Share from "./components/page/Share";
import Story from "./components/page/Story";
import Init from "./components/Init";

function App() {
  return (
    <div dir="rtl">
      <Provider store={store}>
        <Init>
          <RouterProvider router={router} />
        </Init>
      </Provider>
    </div>
    //  <Share/> 
  );
}
export default App;
