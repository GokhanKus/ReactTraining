import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import BasketDrawer from './components/BasketDrawer'

function App() {
  return (
    <>
      <div>E-Ticaret sitesi</div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <BasketDrawer />
      </PageContainer>
    </>
  )
}

export default App
