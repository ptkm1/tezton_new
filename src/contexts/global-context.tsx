import { PropsWithChildren, createContext } from "react";

export const GlobalContext = createContext({} as any);

export default function GlobalProvider({ children }: PropsWithChildren) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
