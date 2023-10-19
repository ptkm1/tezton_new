import { PropsWithChildren, createContext, useState } from "react";

interface GlobalProviderProps {
  selectedFeature?: any;
  setSelectedFeature?: (feature: any) => void;
}

export const GlobalContext = createContext({} as GlobalProviderProps);

export default function GlobalProvider({ children }: PropsWithChildren) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <GlobalContext.Provider value={{ selectedFeature, setSelectedFeature }}>
      {children}
    </GlobalContext.Provider>
  );
}
