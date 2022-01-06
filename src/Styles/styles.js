import styled from "styled-components";

export const StyledDisplay = styled.div`
  height: 52vh;
  width: 100vw;
  overflow-y: scroll;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    display: none;
  }

div{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 304px;
    width: 300px;
    border-radius: 3px;
    margin: 3px 10px;
    border: solid 2px blue;
}
  img {
      border-radius: 3px;
      margin: 5px;
    height: 16vh;
  }

  h2 {
    font-size: 14px;
  }
  h3{
      font-size 11px;
  }
  p{
      margin: 5px 0px;
      font-size: 10px;
  }
 
  button{
 
      border: none;
      border-radius: 3px;
      margin-bottom: 5px;
      padding: 3px 5px;
      background-color: red;
  }


  @media screen and (min-width: 768px){

div{
    height: 310px;
}

   img{

       width: 10vw;
       max-width: 100px;
   }

  }
`;

export const StyledCart = styled.div`

height: 48vh;
  width: 100vw;
  overflow-y: scroll;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    display: none;
  }


div{
    width: 300px;
    border-radius: 3px;
    margin: 5px 10px;
    border: solid 2px blue;
}
  img {
      border-radius: 3px;
      margin: 5px;
    height: 15vh;
  }


  div h2{
      font-size: 11px;
      margin: 5px;
      display:
  }
  h3{
      font-size 11px;
  }
  p {
    font-size: 11px;
    font-weight: 550;
  }
  button{
      border: none;
      border-radius: 3px;
      margin-bottom: 5px;
      padding: 3px 5px;
      background-color: yellow;
  }


  @media screen and (min-width: 768px){

   img{

       width: 8vw;
       max-width: 100px;
   }

  }

`;
