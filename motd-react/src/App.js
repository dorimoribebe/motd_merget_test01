import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Output from "./pages/Output";
import Upload from "./pages/Upload";
import EmptyPage from "./pages/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="card">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/upload" component={Upload} />
            <Route path="/output" component={Output} />
            <Route component={EmptyPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
