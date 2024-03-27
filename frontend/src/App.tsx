import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container, CssBaseline } from "@mui/material";
import Header from "./components/common/Header";

export default function App() {
  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <CssBaseline />
      <Header />
      <Container id="container">
        <Outlet />
      </Container>
    </>
  )
}
