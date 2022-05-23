// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import News from './components/news';

import { BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useState } from 'react';

const categories = [
  "business",
  "entertainment",
  "environment",
  "food",
  "health",
  "politics",
  "science",
  "sports",
  "technology",
  "top",
  "world",
]
const language = "en";
const country = "in,gb,ua,ru,us";

function App(props) {
  
  const [query, setQuery] = useState('');

  return (
    <div className="container-fluid px-0">
      <Router>
        <Navbar categories={categories}  setQuery={setQuery} />
        <Routes>
          <Route  exact path="/" element={<News query={query}  key="general" language={language} category={null} country={country} /> }/>
          
          <Route  exact path="/business" element={
            <News query={query} key="business" category="business" language={language}  country={country} />}/> 
          
          <Route  exact path="/entertainment" element={
            <News query={query} key="entertainment" category="entertainment" language={language}  country={country} />}/>
          
          <Route  exact path="/environment" element={
            <News query={query} key="environment" category="environment" language={language}  country={country} />} />
          
          <Route  exact path="/food" element={
            <News query={query} key="food" category="food" language={language}  country={country} />} />
          
          <Route  exact path="/health" element={
            <News query={query} key="health" category="health" language={language}  country={country}/>} />
          
          <Route  exact path="/politics" element={
            <News query={query} key="politics" category="politics" language={language}  country={country}/>} />
          
          <Route  exact path="/science" element={
            <News query={query} key="science" category="science" language={language}  country={country}/>} />
          
          <Route  exact path="/sports" element={
            <News query={query} key="sports" category="sports" language={language}  country={country}/>} />
          
          <Route  exact path="/technology" element={
            <News query={query} key="technology" category="technology" language={language}  country={country}/>} />
          
          <Route  exact path="/top" element={
            <News query={query} key="top" category="top" language={language}  country={country}/>} />
          
          <Route  exact path="/world" element={
            <News query={query} key="world" category="world" language={language}  country={country}/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
