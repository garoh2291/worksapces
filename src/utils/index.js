export function getToken() {
  return JSON.parse(localStorage.getItem("token"));
}

export const removeToken = () => {
  localStorage.removeItem("token");
};

export function useAuth() {
  return {
    isAuth: !!getToken(),
  };
}

export const addErrorIntoField = (errors) =>
  errors ? { error: true } : { error: false };

export const generateQuery = (queryObj) => {
  let query = "";

  const queryArr = Array.from(Object.entries(queryObj));

  queryArr.forEach((item) => {
    if (item[1]) {
      return (query += `${item[0]}=${item[1]}&`);
    }
  });

  return query;
};
