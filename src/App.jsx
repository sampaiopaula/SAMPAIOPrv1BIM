import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='fundo'>
           <div className="comteiner">         
           <div className="comteinerc">
           <div className="cabesalho">
           <div className="divImg">
         <img className="logo" src="https://img.icons8.com/?size=100&id=rpU3BbTVADvt&format=png&color=000000"/>
         </div>
              <div>
                 <p className="titulo">Pão De Mel</p>
                </div>
            </div>

            </div>
          </div>
        
        
         <div className="conteiner2">
            <div className="topo"> 
             <p>Não e so Chocolate e Uma</p>
              <p>EXPERIENCIA</p>
              </div>
          </div>

         <div className="ali">
            <div className="conteiner3 ">
            
             <div className="gridItem caixa1 fontr">
               <p>DOCE DE LEITE </p>
             </div>
            
             <div className="gridItem caixa2  fontr">
               <p>DOCE DE LEIE</p>
             </div>
            
             <div className="gridItem  caixa3 fontr">
                <p>BRIGADEIRO</p>
             </div>
            
               <div className="gridItem caixa4 fontr">
              <p>BRIGADEIRO</p>
               </div>
           
              <div className="gridItem caixa5 fontr">
              <p>NINHO</p>
            </div>
            
            <div className="gridItem caixa6 new">
              <p className="new1">NEW</p>
              <p className="cor">NINHO</p>
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
        </div>

         <footer className="rodape">
            <div className="roda">

             <div className="divImgr">
              <img className="logor" src="https://img.icons8.com/?size=100&id=El7pTE24c3iC&format=png&color=000000"/>
              <img className="logor" src=" https://img.icons8.com/?size=100&id=FeFKy6pAkhxv&format=png&color=000000"/>
              <img className="logor" src=" https://img.icons8.com/?size=100&id=21088&format=png&color=000000"/>
              <img className="logor" src="https://img.icons8.com/?size=100&id=33029&format=png&color=000000"/>

            </div>
            <div><p>Pães de mel e cia MG/PR</p>
                  <p>MG/ 9888898989</p>
            </div>
          </div>
        </footer>
        
        </>
)}