import React from 'react';
import { Link } from 'react-router-dom';

const Pagina = () => {
    return (
        <div>
            <h1>Outra página</h1>
            <Link to="/">Voltar a outra página...</Link>
        </div>
    );
}

export default Pagina;