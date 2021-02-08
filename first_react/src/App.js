import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import MSContainer from './Components/MSContainer';
import Foot from './Components/Foot';
function App() {
  return (

    <body>
      <header>
        <Nav />
      </header>
      <main>
        <MSContainer />
      </main>
      <footer>
        <Foot />
      </footer>

    </body>

  );
}

export default App;
