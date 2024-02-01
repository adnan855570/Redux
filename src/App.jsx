import './App.css'
import HeaderComponent from './containers/HeaderComponent'
import HomeComponent from './containers/homeComponent'

function App() {

  return (
    <>
      <div className="App">
        <h1>Redux Tutorial for beginners </h1>
        <HomeComponent/>
        <HeaderComponent/>
      </div>
    </>
  )
}

export default App
