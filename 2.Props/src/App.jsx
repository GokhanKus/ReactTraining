import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  const product = {
    name: "Buzdolabi",
    price: 15000
  }
  return (
    <div>

      {/* <Product name="ayakkabi" price={3500} />
      <Product name="pantolon" price={1500} />
      <Product name={product.name} price={product.price} /> */}

      {/* Component içinde component yapısı */}
      <Container>
        <Product name="pantolon" price={1500} />
        <Product name={product.name} price={product.price} />
      </Container>

    </div>
  )
}

export default App

//reactin ana bilesenleri props, component, state'tir
//props Bileşenler birbirleriyle veri paylaşmak için props kullanır.
//Parent (ebeveyn) bileşenden child (çocuk) bileşene veri aktarılır.
// Props değiştirilemez (read-only)
//props (object) ile metot icine(component, function) istedigğimiz parametreyi gondeririz.