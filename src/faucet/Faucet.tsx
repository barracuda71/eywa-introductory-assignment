import styled from "@emotion/styled";
import React, {useCallback} from 'react';
import {useDataStore} from "../index";
import {Token} from "../domain/models";
import {observer} from "mobx-react-lite";


const Root = styled.div`
    background-color: #191332;
    height: 200px;
    width: 576px;
    border-radius: 8px;
    padding: 20px 24px 24px 24px;
    margin-top: 112px;
`;

const Title = styled.div`
    text-align: center;
    color: white;
    font-size: 14px;
    margin-bottom: 19px;
`;

const Body = styled.div`
    padding: 12px 16px;
    background: #191332;
    border: 1px solid #29294D;
    box-sizing: border-box;
    border-radius: 8px;
`;
const Label = styled.div`
    color: #959EBD;
`;
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 23px;
    padding-bottom: 24px;
`;


export const Faucet = observer(() => {
    const store = useDataStore()
    const onClickHandler = useCallback(() => {
        store.setBalance(Token.USDT, Math.random())
    }, [])
    return (
        <Root>
            <Title>
                FAUCET
            </Title>
            <Body>
                <Label>Ethereum Rinkeby</Label>
                <Row>
                </Row>
                <span>Balance: {store.balances[Token.USDT]}</span>
                <button onClick={onClickHandler}> Faucet me </button>
            </Body>
        </Root>
    );
})