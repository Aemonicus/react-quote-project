import { Redirect, Route, Switch } from "react-router-dom";
import { NewQuote } from "./pages/NewQuote";
import { QuoteDetail } from "./pages/QuoteDetail";
import { Quotes } from "./pages/Quotes";

function App() {
  return (
    <Switch>
      <Route exact path="/"><Redirect to="/quotes" /></Route>
      <Route exact path="/quotes"><Quotes /></Route>
      <Route path="/quotes/:quoteId"><QuoteDetail /></Route>
      <Route path="/new-quote"><NewQuote /></Route>
    </Switch>
  );
}

export default App;
