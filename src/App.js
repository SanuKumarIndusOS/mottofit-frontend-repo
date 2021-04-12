import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Landing/Home";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Route path="" exact component={Home} />
        </Router>
    );
}

export default App;
