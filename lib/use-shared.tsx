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
 * Component that provides shared state to its descendants via contextAPI.
 * @param state The initial state of the shared data, it can be whatever you want.
 * @param children Just wrap your whole app with SharedProvider.
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
 * @returns a Object containing the shared data and its setter function.
 * @throws Error if used outside of a SharedProvider.
 */
export const useShared = (): {
  data: SharedContextType["data"];
  dispatch: SharedContextType["setData"];
} => {
  const data = useContext(SharedContext);

  if (!data) {
    throw Error("useShared must be used within a SharedProvider.");
  }

  return { data: data.data, dispatch: data.setData };
};
