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

/**
 * Component that provides shared state to its descendants via context.
 * @param state The initial state of the shared data.
 * @param children The child elements to be wrapped by the SharedProvider.
 */
export const SharedProvider = ({ state, children }: SharedProviderType) => {
  const [data, setData] = useState<SharedContextType["data"]>(state);

  return (
    <SharedContext.Provider value={{ data, setData }}>
      {children}
    </SharedContext.Provider>
  );
};

/**
 * Hook for consuming shared state provided by SharedProvider.
 * @returns A tuple containing the shared data and its setter function.
 * @throws Error if used outside of a SharedProvider.
 */
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
