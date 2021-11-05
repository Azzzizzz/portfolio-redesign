import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}



body{
   background-color: #051019;

}

button{
   font-weight: bold;
   font-size: 1.1rem;
   cursor: pointer;
   padding: 1rem 2rem;
   border: 3px solid #23d997;
   background: transparent;
   color: #fff;
   transition: all .5s ease;
   &:hover{
      background-color: #23d997;
      color: white;
   }

}
h1{
   font-size: 4rem;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   letter-spacing: 3px;
   word-spacing: 2px;
}

h2{
   font-family: 'consolas';
   color: #23d997;
}
h3{
   color: #fff;
}

p{
   padding: 3rem 0rem;
   color: #ccc;
   font-size: 1.4rem;
}
.gray{
   color: gray;
}

`;

export default GlobalStyle;
