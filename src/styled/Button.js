import styled from "styled-components";


export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 3px solid black;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: white;
        color: black;
        border: 3px solid black;
        transition: background-color 0.2s ease;
        cursor: pointer;
    }


`;

export const OutlineButton = styled(Button)`
    
    background-color: white;
    color: black;

    &:hover {
        background-color: black;
        color: white;
        border: 3px solid black;

        cursor: pointer;
    }


`;