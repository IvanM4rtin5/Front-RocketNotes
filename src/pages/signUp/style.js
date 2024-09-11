import styled from "styled-components";
import backgroundImg from '../../assets/note.png'
export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;

`;
export const Form = styled.form`
padding: 0 136px;

display: flex;
flex-direction: column;
justify-content: center;

align-items: center;

> h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
}
> h2 {
    font-size: 20px;
    margin: 40px 0;
}
> p {
    font-size: 15px;
    color: ${({theme})=> theme.COLORS.GRAY_100};
}

> a {
    margin-top: 50px;
    color: ${({theme})=> theme.COLORS.ORANGE};
    font-size: 15px;
}
`;
export const Background = styled.div`
flex: 1;
background: url(${backgroundImg})no-repeat center center;
background-size: cover;

`;