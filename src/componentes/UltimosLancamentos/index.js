import React from 'react';
import {livros} from './dadosUltimosLancamentos'
import {Titulo} from './../Titulo'
import CardRecomenda from '../CardRecomenda';
import styled from 'styled-components';
import imgLivro from './../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">
                Últimos lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => 
                    <img src={livro.src} alt='LivroLancamento' />
                )}
            </NovosLivrosContainer>

           <CardRecomenda
           titulo="Talvez você se interesse por"
           subtitulo="Angular 11"
           descricao="Contruindo uma aplicação com a plataforma Google"
           imagem={imgLivro}>
           </CardRecomenda>

        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos