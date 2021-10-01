import {Token} from "./models";

export interface State {
  balances: Record<Token, number>;
  tokens: Token[];
  currentToken: Token;
  publicKey: string;
}