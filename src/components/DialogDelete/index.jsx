import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

function DialogDelete({
  openDelete,
  setOpenDelete,
  valueDelete,
  handleDelete,
}) {
  const handleClose = () => {
    setOpenDelete(false);
  };

  return (
    <section>
      <Dialog
        open={openDelete}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete Product
            <span style={{ fontWeight: "bold" }}> #{valueDelete?.name}</span>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleDelete}>
            OK
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}

export default DialogDelete;
