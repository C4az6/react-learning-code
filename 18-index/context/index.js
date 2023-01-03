import { btnStyle } from "../config";

export const BtnStyleContext = React.createContext({
  style: btnStyle.primary,
  doClick: () => { }
});

export const LoginStatusContext = React.createContext({
  status: false,
  login: () => { }
});