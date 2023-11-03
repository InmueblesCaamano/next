import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import Article from './components/article'
export default function Home() {
  return (
    <div className=''>
      <div className='background-img'>
        <div  className='navegador'>
          <div className='menuNav'>
            <div>
              <Image src='/img/logo.svg' alt="Picture of the author" height={50} width={50}></Image>
            </div>
            <div className='menu'>
              <div className='manuButtons'>
                Casas
              </div>
              <div className='manuButtons'>
                Apartamentos
              </div>
              <div className='manuButtons'>
                Terrenos
              </div>
            </div>
          </div>
          <div>
            <button className='btnYellow'> Iniciar sesion </button>
          </div>
        </div>
        <div className='land'>
          <div className='imgWrapper'>
            <Image src='/img/logo2.svg' width={200} height={200} />
          </div>
          <h1 className='principal mb-3'>Encuentra tu propiedad favorita</h1>
          <input className='buscador' type='text' placeholder='Buscar...' />
        </div>
      </div>
      <div className='container mt-4 mb-5'>
        <div className='row'>
          <div className='col-12 pb-4'>
             <h2 className='tittle pt-5 pb-3'>
                Propiedades a la venta en Nueva{} esparta
             </h2>
             <hr/>
          </div>
          <div className='row'>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          </div>
        </div>
      </div>
    </div>
    
  )
}
