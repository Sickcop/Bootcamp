import './App.css';
import Product from './components/product';
import { useState, useEffect } from 'react';

const URL = `https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326`

function App() {

    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    const arrayProductos = data.results.map((product, index) => (
      <Product
        key={index}
        img={product.thumbnail}
        nombre={product.title}
        precio={product.price}
      />
    ));

  
  return (
    <div className="App">
       <header>
        <h1>Mi Tienda</h1>
    </header>
    <div className="container">
        <nav className="sidebar">
            <h2>Categorías</h2>

            <ul>
                <li><a href="header">Categoría 1</a></li> 
            </ul>

        </nav>
        <div className='container-centro'>
          <h2>Productos</h2>
            <div className="content">
              {arrayProductos}
            </div>
        </div>
    </div>
    <footer>
        <p>Derechos reservados &copy; 2024 Mi Tienda</p>
    </footer>
    </div>
  );
}

export default App;
