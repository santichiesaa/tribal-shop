import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Store } from "./pages/Store";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/store" Component={Store} />
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
