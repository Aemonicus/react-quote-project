import QuoteList from "../components/quotes/QuoteList"

export const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Tototototo" },
  { id: "q2", author: "Andrei", text: "Tatatata" },
  { id: "q3", author: "Brad", text: "Tutututututu" },
]

export const Quotes = () => {
  return (

    <QuoteList quotes={DUMMY_QUOTES} />
  )
}
