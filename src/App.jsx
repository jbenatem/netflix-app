import Header from './components/Header/Header'
import Section from './components/Section/Section'

function App() {
  const style = {
    backgroundColor: 'black'
  }

  return (
    <>
      <main style={style}>
        <Header/> 
        <Section/>
      </main>
    </>
  )
}

export default App
