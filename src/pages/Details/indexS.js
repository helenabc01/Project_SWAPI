import React from 'react';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`;

const SaberContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 300px;
    transform: rotate(90deg);
`;

const SaberHandle = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 100px;
    background-color: #333;
    border-radius: 12.5px;
    z-index: 2;
`;

const SaberBlade = styled.div`
    padding-top: 50px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-bottom: 70%;
    transform: translateX(-50%);
    width: 10px;
    height: 80%;
    background-color: ${props => props.color || '#00f'};
    border-radius: 5px;
    filter: blur(2.5px);
    animation: ${glow} 1s infinite linear;
`;

const Sabre = ({ color }) => {
    return (
        <SaberContainer>
            <SaberHandle />
            <SaberBlade color={color} />
            <SaberBlade color="#999" />
        </SaberContainer>
    );
};

export default Sabre;
