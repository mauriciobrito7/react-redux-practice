import React from "react";
import { Provider } from "react-redux";
// store de redux
import store from "./redux/store";

// componentes
import Players from "./components/players/players.component";
import SelectedTeam from "./components/selected-team/selected-team.component";

import "./styles.scss";

function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>Manager</h1>
        <Players />
        <SelectedTeam />
      </main>
    </Provider>
  );
}

export default App;
