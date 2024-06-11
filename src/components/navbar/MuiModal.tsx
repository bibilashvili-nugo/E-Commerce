import { Box, Button, Input, Modal, Typography } from "@mui/material";
import "./muimodal.css";

type MoiModalsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  click: number;
};

const MuiModals = ({ open, setOpen, text, click }: MoiModalsType) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="modal"
    >
      <Box
        className="box-container"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {text}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {click === 1 ? `Welcome Back` : `Create Account`}
        </Typography>
        {click === 1 ? (
          <>
            <Input placeholder="Email" type="text" />
            <Input placeholder="Password" type="password" />
          </>
        ) : click === 2 ? (
          <>
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="text" />
            <Input placeholder="Password" type="password" />
          </>
        ) : null}
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default MuiModals;
