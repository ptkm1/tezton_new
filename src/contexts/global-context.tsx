import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface GlobalProviderProps {
  selectedFeature?: any;
  setSelectedFeature?: (feature: any) => void;
  selectedCompany?: any;
  setSelectedCompany?: (company: any) => void;
}

export const GlobalContext = createContext({} as GlobalProviderProps);

export default function GlobalProvider({ children }: PropsWithChildren) {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    (async () => {
      const theme = localStorage.getItem("@teztonTheme");
      if (theme === "dark") document.documentElement.classList.add("dark");
    })();
  }, []);

  return (
    <GlobalContext.Provider value={{ selectedFeature, setSelectedFeature, selectedCompany, setSelectedCompany }}>
      {children}
    </GlobalContext.Provider>
  );
}
