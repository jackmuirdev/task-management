import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container, CssBaseline } from "@mui/material";

export default function App() {
  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <CssBaseline />
      <Container id="container">
        <Outlet />
      </Container>
    </>
  )
}
