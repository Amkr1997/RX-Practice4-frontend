import MovieView from "./components/MovieView";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieForm from "./components/MovieForm";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path={"/"} element={<MovieView />} />
            <Route path="/movieForm" element={<MovieForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
