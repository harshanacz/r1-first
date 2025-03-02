import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const AddUserPage = () => {
  const [uid, setUid] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleGenerateUID = () => {
    if (username.length < 3) {
      setError("Username must be at least 3 characters long");
      toast.error("Username must be at least 3 characters long");
      return;
    } else if (username.length > 8) {
      setError("Username must be less than 8 characters");
      toast.error("Username must be less than 8 characters");
      return;
    }

    setError('');
    const longUid = uuidv4();
    const newUid = longUid.substring(0, 4);
    setUid(newUid);
    toastMessageSender(newUid);
  };

  const toastMessageSender = (id) => {
    toast.success(`User added under: ${id}`);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 mx-auto">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="outlined"  sx={{borderRadius:10}}>back</Button>
      </Link>
      <div className="text-2xl mt-5">Add a user</div>

      <TextField
        id="outlined-basic"
        label="UserName"
        variant="outlined"
        size="small"
        value={username}
        onChange={handleUsernameChange}
        error={!!error}
        helperText={error}
        sx={{ margin: 3 }}
      />
      <div className="max-w-md">
        <Button variant="contained" onClick={handleGenerateUID}>
          Add to System
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddUserPage;