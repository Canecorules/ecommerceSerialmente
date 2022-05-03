import "./NavBar.css"

function NavBar(){
    return(
        <div className='p-5 text-center bg-image'>        
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-5'>Tienda Serialmente</h1>              
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>Libros</a>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>Historietas</a>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>Artículos</a>
            </div>
          </div>
        </div>
      

    )
}

export default NavBar