import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

function App() {
 const [products, setProducts] = useState<Product[]>([]);

  function addProduct(){
    setProducts(prevState => [...prevState,
      {
        id: prevState.length + 101,
        name:"product" + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        brand: 'smoe Brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
      }
    ])
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then( data => setProducts(data))
  },[])

  return (
    <div>
      <h1 style={{color: 'green'}}>Re-Store</h1>
      <Catalog products={products} addProduct={addProduct}/>

    </div>
  );
}

export default App;
