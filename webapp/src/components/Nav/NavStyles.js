import { css } from '@emotion/core'

export const navStyle = css`    
  box-shadow: 0px 0px 5px 1px #455a64;
  margin: 8px;
  border-radius: 3px;
  background: #37474F;  
  height: 50px;

  & ul > li > a {
    color: whitesmoke;
    text-decoration: none;
    padding: 8px;
  }

  & ul > li > a:hover {
    color: #FF7043;   
    transition: color 0.2s; 
  }

  & > ul {
      display: flex;
      height: 50px;
      flex-direction: row;
      list-style-type: none;
      align-items: center;
  }
  
  & > ul > li:not(:first-child) {
    margin-left: 16px;
  }

`