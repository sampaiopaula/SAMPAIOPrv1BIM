import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='fundo'>
           <div className="comteiner">         
           <div className="comteinerc">
           <Header/>

            </div>
          </div>
     
        
         <div className="conteiner2">
            <div className="topo"> 
             <p>Não é so Chocolate e Uma</p>
              <p>EXPERIENCIA</p>
              </div>
          </div>

         <div className="ali">
            <div className="conteiner3">
            
             <div className="gridItem caixa1 fontr">
               <p>DOCE DE LEITE </p>
             </div>
            
             <div className="gridItem caixa2 fontr">
               <p>DOCE DE LEIE</p>
             </div>
            
             <div className="gridItem caixa3 fontr">
                <p>BRIGADEIRO</p>
             </div>
            
               <div className="gridItem caixa4 fontr">
              <p>BRIGADEIRO</p>
               </div>
           
              <div className="gridItem caixa5 fontr">
              <p>NINHO</p>
            </div>
            
           
            <div className="gridItem  caixa7 fontr">
              <p className="cor">MUSE DE LIMAO</p>
            </div>
            
             <div className="gridItem caixa8 new"> 
               <p className="new1">NEW</p>
               <p className="cor">MUSE DE LIMAO</p>
              </div>
          </div>

        </div>
        </div> <div className="gridItem caixa6 new">
              <p className="new1">NEW</p>
              <p className="cor">NINHO</p>
            </div>
           

         <Footer/>
        
        </>
)}
export default App