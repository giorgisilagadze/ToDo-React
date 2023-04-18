import styled from "styled-components";

export const Container = styled.div`
    width: 430px;
    background-image: url("./images/Rectangle2.png");
    background-repeat: no-repeat;
    padding: 114px 28px 78px;
    border-radius: 10px;
    background-color: white;
`

export const DateDay = styled.p`
    font-family: 'Russo One', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: white;
    text-align: end;
`

export const DateTime = styled.p`
    font-family: 'Russo One', sans-serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: white;
    text-align: end;
`

export const NewTodo = styled.input`
    width: 275px;
    height: 49px;
    border-radius: 5px;
    border: none;
    background-color: #EBEFF2;
    margin-top: 36px;
    padding-left: 48px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    position: absolute;

    &:focus {
        outline: none;
    }

`

export const Check = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #20EEB0;
    top: 50px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputDiv = styled.div`
    position: relative;
`
export const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
`

export const Button = styled.button`
    width: 88px;
    height: 49px;
    border-radius: 5px;
    border: none;
    background-color: #20EEB0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    cursor: pointer;


    &:hover {
        transform: scale(0.98);
        opacity: .9;
    }
`

export const TodosDiv = styled.div`
    height: 260px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
    width: 2px;
  }
    &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }
    &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 10px;
  }
`