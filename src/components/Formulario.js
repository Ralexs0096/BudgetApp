import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    //cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();

        //validar gasto
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }

        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //resetear el form
        guardarNombre('');
        guardarCantidad('');
    }


    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Coloca tus gastos aqui</h2>
            {error ? <Error mensaje="Ambos campos son requeridos"/> : null}
            
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="ej, Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="ej, 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(e.target.value)}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;