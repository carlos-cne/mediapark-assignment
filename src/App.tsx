import React from "react";
import { Provider } from "context/provider/Provider";
import Router from "routes/routes";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
