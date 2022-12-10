import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { NewQuote } from "./pages/NewQuote";
import { NotFound } from "./pages/NotFound";
import { QuoteDetail } from "./pages/QuoteDetail";
import { Quotes } from "./pages/Quotes";

import LoadingSpinner from './components/UI/LoadingSpinner';
import React, { Suspense } from 'react';


const NewQuote = React.lazy(() => import("./pages/NewQuote"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const Quotes = React.lazy(() => import("./pages/Quotes"))
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Switch>
          <Route exact path="/"><Redirect to="/quotes" /></Route>
          <Route exact path="/quotes"><Quotes /></Route>
          <Route path="/quotes/:quoteId"><QuoteDetail /></Route>
          <Route path="/new-quote"><NewQuote /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </Suspense>
    </Layout>

  );
}

export default App;
