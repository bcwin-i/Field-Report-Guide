import styled from "styled-components";

export const GButton = styled.button`
    border: none;
    border-radius: 20px;
    background-color: ${props => props.background};
    color: ${props => props.color};
    padding: 5px 20px;
    width: 100px;
    transition: 0.5s ease-in-out all;
    display: flex;
    justify-content: center;
    cursor: pointer;

    :hover{
        background-color: ${props => props.color};
        color: ${props => props.background};
    }
`