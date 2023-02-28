import React from "react";
import { Button, Box } from "@mui/material";
import useToast from "hooks/useToast";

export default function Home() {
  const toast = useToast();

  const clickMe = () => {
    toast.openToast({
      headMsg: "Role Access Added",
      message: "",
      severity: "success",
    });
  };

  return (
    <Box>
      <Button onClick={clickMe}>Click Me</Button>
    </Box>
  );
}
