import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface GlobalProviderProps {
  selectedFeature?: any;
  setSelectedFeature?: (feature: any) => void;
}

export const GlobalContext = createContext({} as GlobalProviderProps);

export default function GlobalProvider({ children }: PropsWithChildren) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    (async () => {
      const theme = localStorage.getItem("@teztonTheme");
      if (theme === "dark") document.documentElement.classList.add("dark");
    })();
  }, []);

  return (
    <GlobalContext.Provider value={{ selectedFeature, setSelectedFeature }}>
      {children}
    </GlobalContext.Provider>
  );
}
