import { useState } from "react";
import { WorkspaceContext } from "..";

export const WorkspaceContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  return (
    <WorkspaceContext.Provider value={{ query, setQuery }}>
      {children}
    </WorkspaceContext.Provider>
  );
};
