import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  & > a {
    font-size: 20px;
    background: -webkit-linear-gradient(#f59e0b, #ea580c, #eab308);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    font-weight: 600;
  }
`;
