import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { NewQuote } from "./pages/NewQuote";
import { NotFound } from "./pages/NotFound";
import { QuoteDetail } from "./pages/QuoteDetail";
import { Quotes } from "./pages/Quotes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/"><Redirect to="/quotes" /></Route>
        <Route exact path="/quotes"><Quotes /></Route>
        <Route path="/quotes/:quoteId"><QuoteDetail /></Route>
        <Route path="/new-quote"><NewQuote /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </Layout>

  );
}

export default App;
