import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import Login from "./components/auth/Login";
import { selectCount, toggleDarkMode } from "./modules/app";
import { useAppDispatch, useAppSelector } from "./modules/hooks";

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts/:id" element={<Login />}></Route>
        <Route path="/users/:id" element={<Login />}></Route>
      </Routes>
    </Container>
  );
}
