import {State} from "./State";
import {Token} from "./models";

export const initialState: (data:{} | void)=>State = (data = {}) => ({
  tokens: [ Token.USDT, Token.EYWA],
  balances: {
    [Token.USDT]: 0,
    [Token.EYWA]: 0,
  },
  currentToken: Token.USDT,
  publicKey: '',
});