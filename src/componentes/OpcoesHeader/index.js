import React from 'react';
import styled from 'styled-components';

const ListaOpcoes = styled.ul`
    display: flex;
`

const ItemOpcoes = styled.li`

  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;

`
const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante', 'teste']

function OpcoesHeader(){
    return (
        <ListaOpcoes>
        { textoOpcoes.map((texto) => (
          <ItemOpcoes><p>{texto}</p></ItemOpcoes>
        ))}
      </ListaOpcoes>
    )
}

export default OpcoesHeader