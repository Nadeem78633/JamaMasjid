import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CreateUser from "../../Users/CreateUser";
import Typography from "@mui/material/Typography";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Avatar from "@mui/material/Avatar";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddUser = () => {
  const [open, setOpen] = React.useState(false);

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Avatar
        style={{
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
        }}
      >
        <AddRoundedIcon
          onClick={handleClickOpen}
          style={{
            height: "50px",
            width: "50px",
            color: "#00c3a5",
            cursor: "pointer",
          }}
        />
      </Avatar>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "500",
                fontFamily: "Poppins",
              }}
            >
              Add User
            </Typography>

            <CloseRoundedIcon
              onClick={handleClose}
              style={{
                color: "gray",
                height: "30px",
                width: "30px",

                cursor: "pointer",
              }}
            />
          </div>
        </DialogTitle>

        <DialogContent>
          <CreateUser />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AddUser;
