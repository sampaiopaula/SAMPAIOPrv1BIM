import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="fundo">
           <div className="comteiner">         
           <div className="comteinerc">
           <Header/>

            </div>
          </div>
     
        
        

       <ProductList/>
        </div> 
           

         <Footer/>
        
        </>
)}
export default App