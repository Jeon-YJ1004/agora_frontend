import { React, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import swal from "sweetalert";

import Header from "../../components/common/Header";
import { userSlice } from "../../reducers/userApi";
import { useSelector, useDispatch } from "react-redux";
import { History } from "history";
import EditIcon from "@mui/icons-material/Edit";
function VoteDetail(props) {
  
  return (
    <>
    <Header />
    주제:{props.title}
    
    </>
  )
}

export default VoteDetail
