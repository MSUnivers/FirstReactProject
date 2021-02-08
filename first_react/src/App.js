import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import MS from './Components/MS';
import Foot from './Components/Foot';
function App() {
  return (

    <body>
      <header>
        <Nav />
      </header>
      <main>
        <MS title="maroua" description="fasdfklasfaklsjdfakjsf" />
        <MS title="nejib" description="fasdfklasfaklsjdfakjsf" />
        <MS title="haroun" description="sgzfgjhsgdjfgjsdf" />
      </main>
      <footer>
        <Foot />
      </footer>

    </body>

  );
}

export default App;
