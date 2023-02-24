import {Routes, Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Todo from './pages/todo';
import './styles/firstStyle.css';


function App() {
  return (
    <>
      <nav style={{color:"blue"}}>
        <a href="/">Ana Sayfa</a>
        <a href="/contact">Contact</a>
        <a href="/blog">Blog</a>
        <a href="/todo">Todo</a>
      </nav>
      <br/>
      <br/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
