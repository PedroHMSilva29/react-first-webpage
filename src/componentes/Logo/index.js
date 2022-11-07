import React from 'react';
import logoImg from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoImage = styled.div`
    display: flex;
    font-size: 30px;
`

const ImageContainer = styled.img`
    margin-right: 10px;
    margin-top: 5px;
    width: 100%;
    height: auto;
`
function Logo(){
    return (
        <LogoImage>
            <ImageContainer src={logoImg} alt='logo'></ImageContainer>
            <p> <strong>Alura</strong>Books</p>
        </LogoImage>
    )
}

export default Logo