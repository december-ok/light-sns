import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import Join from "./components/auth/Join";
import Login from "./components/auth/Login";
import Error from "./components/Error";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { useLoginCheck } from "./hooks/authHooks";

export default function App() {
  useLoginCheck();

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="join" element={<Join />} />
        <Route path="main/*" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
  );
}
