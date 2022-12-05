import Layout from "./components/Layout";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BookList from "./components/BookList";
 

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <Layout /> 
      <Routes>
        <Route path="/" element={<BookList />} ></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
