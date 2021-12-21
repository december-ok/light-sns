import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import Join from "./components/auth/Join";
import Login from "./components/auth/Login";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import Posts from "./components/post/Posts";
import Writing from "./components/post/Writing";
import TimeLine from "./components/timeline/TimeLine";
import Users from "./components/user/Users";
import { selectCount, toggleDarkMode } from "./modules/app";
import { useAppDispatch, useAppSelector } from "./modules/hooks";

export default function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
  );
}
