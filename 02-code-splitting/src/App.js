import { render } from "react-dom";
// import SearchParams from "./SearchParams"; // -- static import for code splitting
import { StrictMode, useState, lazy, Suspense } from "react"; // lazy and suspense ++ for code splitting
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Details from "./Details"; // -- static import for code splitting
import ThemeContext from "./ThemeContext";

// Dynamic imports - imports at runtime - parcel recognises dynamic import and splits code from build time run
// lazy returns module as promise component - lazy components applied at route level interactions
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <Suspense fallback={<h2>loading....SUSPENSE EG:</h2>}>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
