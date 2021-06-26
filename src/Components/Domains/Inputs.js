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

function Inputs({ inputs, dispatch }) {
  const renderItems = () => {
    return inputs.map(({ domain, priority }, index) => (
      <TableRow key={index}>
        <TableCell align="left">
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(e) =>
              dispatch({
                type: "set_text_field",
                payload: { index: index, domain: e.target.value },
              })
            }
          />
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
              <TableCell align="left">Domain/IP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderItems()}</TableBody>
        </Table>
      </TableContainer>
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
    </Styled.DomainsContainer>
  );
}

export default Inputs;
