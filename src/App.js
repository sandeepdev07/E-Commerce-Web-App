import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import store from './store/store';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      
      <Provider store={store}>

      <BrowserRouter>

{/* //we have to show navbar whole page so import outside of routes */}

<Navbar/>

<Routes>

  <Route path='/' element={<Home/>}></Route>

  <Route path='/cart' element={<Cart/>}></Route>
  
  <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />


</Routes>

</BrowserRouter>


      </Provider>
    </div>
  );
}

export default App;
