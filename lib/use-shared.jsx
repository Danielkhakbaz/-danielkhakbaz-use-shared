import { createContext, useContext, useState } from "react"

const SharedContext = createContext();

export const ShareProvider = ({ state, children}) => {
    const [data, setData] = useState(state);

    return <SharedContext.Provider value={{data, setData}}>{children}</SharedContext.Provider>
}

export const useShared = () => {
    const data = useContext(SharedContext);

    return [data.data, data.setData];
}