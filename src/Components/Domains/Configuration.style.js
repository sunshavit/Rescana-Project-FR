import styled, { keyframes } from "styled-components";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const DomainsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const DomainRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
`;

export const DomainItem = styled.div`
  width: 50%;
`;

export const PriorityItem = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveButton = styled(RemoveCircleOutlineIcon)`
  cursor: pointer;
  display: inline;
  color: ${({ disabled }) => (disabled ? "grey" : "red")};
  transition: all 0.5s;
  &:focus {
    color: black;
  }
  &:hover {
    color: ${({ disabled }) => (disabled ? "#bdb3b3" : "#f55f5f")};
    transition: all 0.5s;
    animation: ${rotate} 1s ease-in;
  }
`;

export const AddButton = styled(AddCircleIcon)`
  cursor: pointer;
  display: inline;
  color: green;
  transition: all 0.5s;
  &:hover {
    animation: ${rotate} 1s ease-in;
    color: #82cc70;
    transition: all 0.5s;
  }
`;
