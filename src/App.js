import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import TodoList from './components/TodoList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<TodoList />} />
                    {/* <Route path='/' /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
