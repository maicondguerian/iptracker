import styled, { css, keyframes } from "styled-components";

export const InputContainer = styled.div`
  background-image: url('./src/assets/pattern-bg-desktop.png');
  background-size: cover;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  
  h1{
    font-weight: 500;
    margin-top: 30px;
    color: white;
    letter-spacing: -0.23px;
  }

  div{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: relative;
    max-width: ${(props) => props.$isFocused ? '550px' : '250px'};
    transition: .2s ease-in ;
    border-radius:15px 0 0 15px;

    input{
      width: 100%;
      height: 100%;
      padding: .9em 1.5em;
      border: none;
      outline: none;
      font-size:1.125rem;
      text-overflow: ellipsis;
      background-color: transparent;
   
    }

    input::placeholder{
      color: rgba(0,0,0,0.5);
    }

    button:first-of-type{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 55px;
      border: none;
      background-color: #313131;
      border-radius:0 15px 15px 0px;
      cursor: pointer;
      position: absolute;
      right: -55px;
    }
    button:active{
      background-color: #444;
    }

    #delete_input{
      position: absolute;
      right: 1.5em;
      color: rgba(0,0,0,0.5);
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

`;
