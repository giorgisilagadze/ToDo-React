import styled from "styled-components";
import { Check } from "./Container.Styled";

export const ParentDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
`

export const TodoTitle = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #0D0D0D;
`

export const Time = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #888888;
    margin-top: 3px;
`

export const ChildDiv = styled.div`
    display: flex;
    gap: 18px;
    margin-right: 5px;
`

export const CheckV2 = styled(Check)`
    position: static;
    cursor: pointer;
    background-color: ${({bg}) => bg};
    border: solid 1px #20EEB0;

    &:hover {
        transform: scale(0.98);
        opacity: .9;
    }
`

export const Remove = styled.img`
    cursor: pointer;

    &:hover {
        transform: scale(0.98);
        opacity: .9;
    }
`