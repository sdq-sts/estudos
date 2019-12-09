import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'

const API_KEY = 'AIzaSyCrcxMW5YewfG5MT7L1NIttEuDv5nvEd6k'

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'))
