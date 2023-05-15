import { useState } from "react";
import { WorkspaceContext } from "..";

export const WorkspaceContextProvider = ({ children }) => {
  const [queryObject, setQueryObject] = useState({
    search: "",
    page: 1,
    userId: "",
  });

  const changePage = (name, query) => {
    setQueryObject((prev) => {
      return {
        ...prev,
        [name]: query,
      };
    });
  };

  const changeSearch = (name, query) => {
    setQueryObject((prev) => {
      return {
        ...prev,
        page: 1,
        [name]: query,
      };
    });
  };

  return (
    <WorkspaceContext.Provider
      value={{ queryObject, changePage, changeSearch }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};
