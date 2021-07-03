import * as Styled from "./Configuration.style";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

function Configuration({ configs, dispatch }) {
  const renderItems = () => {
    return configs.map(({ domain, priority }, index) => (
      <TableRow key={index}>
        <TableCell align="left">
          <TextField
            label="Enter a valid domain"
            variant="outlined"
            onChange={(e) =>
              dispatch({
                type: "set_text_field",
                payload: { index: index, domain: e.target.value },
              })
            }
          />
        </TableCell>
        <TableCell align="center">
          <Styled.PriorityItem>
            <Styled.AddButton
              onClick={() => dispatch({ type: "increment", payload: index })}
            />
            {priority}
            <Styled.RemoveButton
              disabled={priority === 1}
              onClick={() => dispatch({ type: "decrement", payload: index })}
            />
          </Styled.PriorityItem>
        </TableCell>
        <TableCell align="right">
          {!!index && (
            <Styled.RemoveItem
              onClick={() => dispatch({ type: "remove_item", payload: index })}
            />
          )}
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Styled.DomainsContainer>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Configuration</TableCell>
              <TableCell align="center">Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderItems()}</TableBody>
        </Table>
      </TableContainer>
      <Styled.Floating>
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon
            onClick={() =>
              dispatch({
                type: "add_item",
                payload: { domain: "", priority: 1 },
              })
            }
          />
        </Fab>
      </Styled.Floating>
    </Styled.DomainsContainer>
  );
}

export default Configuration;
