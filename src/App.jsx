
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Clozapine from './pages/Clozapine'

function App() {
 
 
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              {/* <Route path='/clozapine' element={<Clozapine/>}/> */}
              <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      
    
        
    </BrowserRouter>
  )
}

export default App
