import styled, { keyframes } from "styled-components";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";

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
  justify-content: space-between;
  .MuiFab-sizeSmall {
    align-self: flex-end;
  }
  .MuiTableContainer-root {
    height: 80%;
  }
`;

export const PriorityItem = styled.div`
  display: flex;
  justify-content: space-evenly;
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

export const AddButton = styled(AddCircleOutlineIcon)`
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

export const RemoveItem = styled(DeleteIcon)`
  cursor: pointer;
  display: inline;
  cursor: pointer;
  &:hover {
    color: red;
    transition: all 0.2s;
  }
`;

export const Floating = styled.div`
  align-self: flex-end;
  .MuiSvgIcon-root {
    color: white;
  }
`;
