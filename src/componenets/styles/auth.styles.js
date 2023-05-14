import styled from "styled-components";

export const StyledAuth = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 400px;
    min-height: 400px;
    box-shadow: 1px 1px 10px 2px #c7c7c7;
    -webkit-backdrop-filter: blur(8px); /* Safari 9+ */
    backdrop-filter: blur(8px); /* Chrome and Opera */
    border-radius: 8px;
    padding: 20px 15px;

    & > h6 {
      font-size: 20px;
    }

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
  }
`;
