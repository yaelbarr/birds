import BirdList from './components/BirdList.js';
import { useState } from 'react';
import './App.css';

function App() {
var page = 1;
const [pages, setPages] = useState([...Array(page).keys()]);

var newPage = page;

//inifinat scroll via detection of bottom.
function handleScroll() {
  var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight;
  if(isAtBottom){
    newPage += 1;
    setPages([...Array(newPage).keys()]);
  }
}

window.addEventListener("scroll", handleScroll);

  return (
    <div ClassName="App">
      {pages.map(pag =>
          <BirdList/>
        )}
    </div>
  )
}

export default App;