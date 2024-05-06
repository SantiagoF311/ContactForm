import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none; 
  padding: 5px 10px;
  border-radius: 4px;
  color: gray;
  cursor: pointer;  

  &:hover {  
    background-color: #eee;
  }
`;