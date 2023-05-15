import styled from "styled-components";
import { Button } from "@mui/material";

export const StyledDashboard = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: auto;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const LogoutWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: fit-content;
  cursor: pointer;
  color: #ea580c;
`;

export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 10px;
`;

export const Heading = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > h2 {
    font-size: 60px;
    text-align: center;

    & > span {
      background: -webkit-linear-gradient(left, #f59e0b, #ea580c, #eab308);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  & > p {
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    color: rgb(75 85 99);
  }
`;

export const StyledBoard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledNewCard = styled.div`
  width: 220px;
  height: 150px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: linear 0.3s;

  &:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.5),
      0 4px 6px -4px rgb(0 0 0 / 0.3);
  }
`;

export const StyledActions = styled.div`
  position: absolute;
  padding: 0 10px;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  left: 0;
  bottom: 0;
  /* display: none; */
  display: flex;
`;

export const StyledCard = styled.div`
  width: 220px;
  height: 150px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  & > h6 {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const StyledText = styled.p`
  color: ${({ available }) => (available ? "green" : "black")};
  margin-top: 10px;

  & > span {
    cursor: pointer;
    text-decoration: underline;
    color: green;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

export const MoreButton = styled(Button)`
  width: 250px;
  background-color: #ea580c !important;
`;

export const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const FilterItem = styled.span`
  position: relative;
  color: #ea580c;
  font-weight: 600;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    /*width: 100%;*/
    width: ${({ value }) => value || "0%"};
    height: 2px;
    bottom: -5px;
    left: 0;
    margin-top: 5px;
    background-color: #ea580c;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }
`;
