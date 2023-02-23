import React,{useState} from 'react';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ListSquareEle from "./ListSquareEle";
import styled from "styled-components";

function ListSquare1x5({header, list, link}) {
    //얻어오는 데이터에 따라 구분-> 하위 element의 link 가 바뀌게 됨
    if(link==="agoraBoard_list")link="/agora"
    
    else if (link==="voteBoard_list")link="/vote"
    else if (link==="bestAgoraBoard_list")link="/agora"
    else if (link==="bestVoteBoard_list")link="/vote"
    
  return (
    <div>
      <StyledLink to={{link}} >
        {header}
      </StyledLink>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1,5)"
        gap={1}
        sx={{
          mt: 1,
          mb: 5,
        }}
      >
        {list &&
          list.map((item, index) => 
            <div key={index}>
            <Box gridColumn={1} sx={{
                textAlign: 'left' 
            }}>
              <ListSquareEle item={item}link={link}></ListSquareEle>
            </Box>
          </div>
        )}
      </Box>
    </div>
  );
}
const StyledLink =styled(Link)`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

export default ListSquare1x5;
