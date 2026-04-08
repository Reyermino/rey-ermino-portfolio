import './styles/App.css'
import Header from './component/header'
import Home from './component/home'
import About from './component/about'
import Projects from './component/projects'
import Dashboard from './component/dashboard'
import Contacts from './component/contacts'
import Footer from './component/footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Projects />
      <Dashboard />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
