import React, { ReactNode, createContext, useContext, useState } from "react";

type SharedContextType = {
  data: unknown;
  setData: (data: unknown) => void;
};

type SharedProviderType = {
  state: unknown;
  children: ReactNode;
};

const SharedContext = createContext<SharedContextType | undefined>(undefined);

export const SharedProvider = ({ state, children }: SharedProviderType) => {
  const [data, setData] = useState<SharedContextType["data"]>(state);

  return (
    <SharedContext.Provider value={{ data, setData }}>
      {children}
    </SharedContext.Provider>
  );
};

export const useShared = (): [
  SharedContextType["data"],
  SharedContextType["setData"],
] => {
  const data = useContext(SharedContext);

  if (!data) {
    throw Error("useShared must be used within a SharedProvider.");
  }

  return [data.data, data.setData];
};
