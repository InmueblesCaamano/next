import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import Article from './components/article'
import Link from 'next/link'
export default function Home() {
  return (
    <div className=''>
      <div className='ws-button'>
        <Image className='ws-img-btn' src='/img/logo-ws.svg' alt='whatsapp' height={40} width={40} ></Image>
      </div>
      <div className='background-img'>
        <div className='navegador'>
          <div className='menuNav'>
            <div>
              <Image src='/img/logo.svg' alt="Picture of the author" height={50} width={50}></Image>
            </div>
            <div className='menu'>
              <Link className='menuButtons' href='/casas'> Casas </Link>
              
              <div className='menuButtons'>
                Apartamentos
              </div>
              <div className='menuButtons'>
                Tomhouse
              </div>
              <div className='menuButtons'>

                Terrenos

              </div>
              <div className='menuButtons'>
                Locales comerciaes
              </div>
              {<div className='menuButtons'>
                <a href='https://www.instagram.com/inmobiliariacaamano/' target='blank'>
                  <Image src='/img/logo-ig.png' alt="Picture of the author" height={30} width={30}></Image>
                </a>
              </div>}
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
              Propiedades a la venta en Nueva{ } esparta
            </h2>
            <hr />
          </div>
          <div className='row'>
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </div>

  )
}
