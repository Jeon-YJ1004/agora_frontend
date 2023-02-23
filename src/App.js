import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./reducers/history.js";

import "./App.css";

import Main from "./pages/Main";
import {MyPage,Register,Logout,Login,Auth,Profile} from "./pages/Auth"
import {AgoraBoard,AgoraDetail,AgoraRegister} from "./pages/agora"
import {VoteBoard,VoteDetail,VoteRegister} from "./pages/vote"

function App() {
  const user = localStorage.getItem("user");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/mypage" element={<MyPage />} />

          <Route path="/vote" element={<VoteBoard />} />
          <Route path="/vote/register" element={<VoteRegister />} />
          <Route path="/vote/detail/:id" element={<VoteDetail />} />

          <Route path="/agora" element={<AgoraBoard />} />
          <Route path="/agora/register" element={<AgoraRegister />} />
          <Route path="/agora/detail/:id" element={<AgoraDetail />} />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
