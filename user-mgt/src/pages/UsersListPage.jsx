import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

import users from "../data/data";
import { red } from "@mui/material/colors";

const UsersListPage = () => {
  return (
    <div className="lg:mx-20">
      <h1 className="text-2xl text-black mt-10 mb-5">User Details</h1>
      <TableContainer component={Paper} className="mb-20">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            users.length >0 ?
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    sx={{ marginRight: 2, borderRadius: 5 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#B71C1C", borderRadius: 5 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
        
        :<div>There is no user data</div>
        }
          </TableBody>
        </Table>
      </TableContainer> 
    </div>
  );
};

export default UsersListPage;
