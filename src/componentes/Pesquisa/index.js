import React from 'react';
import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react'
import { livros } from './dadosPesquisa.js'

/* useEffect, useCallback, useContext, useMemo */

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const PesquisaSection = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    return (
        <PesquisaSection>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input placeholder="Escreva sua próxima leitura"
                    onBlur={ evento => {
                        const textoDigitado = evento.target.value
                        const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                        setLivrosPesquisados(resultadoPesquisa)
                        console.log(livrosPesquisados)
                    }}
            />

            { livrosPesquisados.map( livro => (
                <Resultado>
                    <img alt='resultado' src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            ) ) }

        </PesquisaSection>
    )
}

export default Pesquisa