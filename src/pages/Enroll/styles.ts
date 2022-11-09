import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  padding: 4rem 3rem;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(49,238,55,0.3);
  /* background: linear-gradient(90deg, rgba(49,238,55,1) 0%, rgba(177,246,166,1) 0%, rgba(93,233,100,1) 35%, rgba(93,233,100,1) 100%); */

  div{
    height:100%;
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div{
      width:65%;
      height: 70%;
      display:flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
  
  >div:first-child{
    background: rgb(49,238,55);
    background: linear-gradient(90deg, rgba(49,238,55,1) 0%, rgba(50,242,192,1) 0%, rgba(85,237,133,1) 38%, rgba(140,252,109,1) 100%);
    div{
      /* background: rgb(255,255,255);
      background: linear-gradient(90deg, rgba(255,255,255,0.01) 0%, rgba(139,249,139,1) 35%, rgba(119,252,82,1) 100%); */
      background-color: rgba(255, 255, 255, 0.2);
      gap: 0.5rem;
      padding: 1.75rem;
      h2, h3 {
        color: #ffffff;
      }
      h2{
        font-size: 2rem;
        font-style: italic;
        font-weight: bold;
      }
      h3{
        font-size: 1.75rem;
        font-weight: 500;
      }
    }
  }
  >div:last-child{
    background-color:#ffffff;

  }
`;
export const InnerContainer = styled.div`
`;

export const FormContainer = styled.div`
  justify-content:center;
  display: flex;
  align-items: center;
  height:100%;
  width:100%;
  img{
    object-fit:fit-content;
    width:40%;
    aspect-ratio:1;
  }
`
