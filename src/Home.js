import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Bem vindo essa é minha página inicial!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/pagina">Ir para outra página</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;