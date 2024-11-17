import './App.css';

import AddBook from './components/AddBook';
import BookList from './components/BookList';

function App() {
  return (
    <div className='container'>
      <h1>React.js Book Manager</h1>
      <p>Your book management with React.js and Redux</p>
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;
