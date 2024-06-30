import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ShowData from './components/ShowData';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<ShowData></ShowData>}></Route>
        <Route path='/add' element={<AddExpense></AddExpense>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
