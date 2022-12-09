import React, { Fragment } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import { DUMMY_QUOTES } from './Quotes'



export const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams()

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route exact path={`${match.path}`}>
        <div className="centered">
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}><Comments /></Route>
    </Fragment >
  )
}
