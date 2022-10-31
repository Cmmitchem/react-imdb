import './App.css';
import CategoryTitle from './CategoryTitle';
import Footer from './Footer';
import MoviesGrid from './MoviesGrid';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      
      <SearchBar />
      <CategoryTitle />
      <MoviesGrid />
      <Footer />
    </div>
  );
}

export default App;
