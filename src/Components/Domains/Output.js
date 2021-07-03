import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
function Output({ data }) {
  const renderItems = () => {
    return data.map((item) => (
      <TableRow key={item.key}>
        <TableCell align="left">{item.key + 1}</TableCell>
        <TableCell align="center">{item.ip}</TableCell>
        <TableCell align="center">{item.originalDomain}</TableCell>
      </TableRow>
    ));
  };

  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="center">IP</TableCell>
              <TableCell align="center">Domain</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderItems()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Output;
