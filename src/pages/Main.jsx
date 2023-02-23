import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Box } from "@mui/system";
import { Divider, Container,Grid } from "@mui/material";

import board_list from "../assets/json/board_list.js";
import { Header} from "../components/common";
//import { getAllBoardDB } from "../reducers/boardApi";
import ListSquare1x5 from "../components/common/list/ListSquare1x5";

function Main() {
  // const board_list = useSelector((state) => state.Board.list);
  //const dispatch = useDispatch();
  const headers = [
    "AGORA",
    "VOTE",
    "BEST AGORA",
    "BEST VOTE",
    "Q&A"
  ];
  const [headerBoard, setHeaderBoard] = useState({
    agoraBoard_list: board_list.slice(0, 2),
    voteBoard_list: board_list.slice(3,4),
    bestAgoraBoard_list: board_list.slice(0, 4),
    bestVoteBoard_list: board_list.slice(0, 4),
  });
  console.log(headerBoard)
  // useEffect(() => {
  //   // 리스트를 db에서 받아오기
  //   dispatch(getAllBoardDB());
  // }, [dispatch, board_list]);
  return (
    <>
      <Grid>
        <Header />
        {/* <Banner /> */}
        <Container sx={{ alignItems: "center" }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} >
          <ListSquare1x5
              header={headers[0]}
              link="agora"
              list={headerBoard.agoraBoard_list}
            ></ListSquare1x5>
          </Grid>
          <Grid item xs={6}>
            <ListSquare1x5
              header={headers[1]}
              link="vote"
              list={headerBoard.voteBoard_list}
            ></ListSquare1x5>
          </Grid>
          <Grid item xs={6}>
    <ListSquare1x5
                  header={headers[2]}
                  link="bestAgora"
                  list={headerBoard.bestAgoraBoard_list}
                ></ListSquare1x5>
              </Grid>
              <Grid item xs={6} >
    <ListSquare1x5
                  header={headers[3]}
                  link="bestVote"
                  list={headerBoard.bestVoteBoard_list}
                ></ListSquare1x5>
              </Grid>
</Grid>
  
                
                
                <Divider variant="middle" sx={{ width: "100%" }}></Divider>
                
                <Divider variant="middle" sx={{ width: "100%" }}></Divider>
                
                
                <ListSquare1x5
                  header={headers[4]}
                  link="qna"
                  
                ></ListSquare1x5>
           
            </Container>
     
      </Grid>
    </>
  );
}

export default Main;
