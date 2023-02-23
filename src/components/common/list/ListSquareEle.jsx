import React from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function ListSquareEle(props) {
  const link = props.link;
  const { id, author,title,time} = props.item;
  const size = props.size;
  const linkUrl = `/${link}/detail/${id}`;
  return (
    <Link to={linkUrl}>
      <Box >
        <Box >
          <Typography variant="overline" display="block" gutterBottom>
            {author}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
export default ListSquareEle;