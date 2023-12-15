import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regPhoneNumber = "^+20d{2}d{8}$";

  const Roles = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleClick();
  };
  return (
    <>
      <Box
        sx={{
          mb: "20px",
        }}
      >
        <Typography
          color={theme.palette.info.light}
          fontSize={"35px"}
          fontWeight={"bold"}
        >
          Create User
        </Typography>
        <Typography fontWeight={"bold"}>Create a New User Profile </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This field is required & must contains at least 3 characters"
                : ""
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required & must contains at least 3 characters"
                : ""
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Box>
        <TextField
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) ? "Please enter a valid email" : ""}
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.phone)}
          helperText={
            Boolean(errors.phone) ? "Please enter a valid phone number" : ""
          }
          {...register("phone", { required: true, pattern: regPhoneNumber })}
          label="Contact Number"
          variant="filled"
        />
        <TextField label="Address 1" variant="filled" />

        <TextField label="Address 2" variant="filled" helperText="optional" />

        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
          variant="filled"
        >
          {Roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ alignSelf: "end" }}>
          <Button type="submit" variant="contained">
            Create Account
          </Button>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            severity="success"
            onClose={handleClose}
            sx={{
              width: "100%",
              color: "white",
              backgroundColor: theme.palette.info.dark,
            }}
          >
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
