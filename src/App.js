import './App.css';
import { Navbar, Header, Content, Footer } from './components'

function App() {
  return (
    <div className='app'>
      <div className='top-web'>
        <Navbar />
        <Header />
      </div>
      <div className='mid-web'>
        <Content />
      </div>
      <div className='bottom-web'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
