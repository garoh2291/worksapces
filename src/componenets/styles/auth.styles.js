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
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    padding: 20px 15px;

    & > h6 {
      font-size: 20px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 2px;
        background-color: #ea580c;
        left: 0;
        bottom: 0;
      }
    }

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      min-height: unset;
      height: auto;
      box-shadow: none;
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
    }
  }
`;
