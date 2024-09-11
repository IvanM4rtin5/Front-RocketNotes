import styled from "styled-components";

export const Container = styled.div`
width: 100%;
> header{
    width: 100%;
    height: 135px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding-top: 0 124px;

    svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 22px;
        margin-left: 105px;
    }
}
`;

export const Form = styled.form`
max-width: 340px;
margin: 30px auto 0;

> div:nth-child(4){
margin-top: 26px;
}
`;

export const Avatar = styled.div`
position: relative;
margin: -125px auto 30px;

width: 180px;
height: 180px;

> img {
width: 180px;
height: 180px;
border-radius: 50%;
}
> label{
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;
    
    input{
        display: none;
    }
    svg{
        width: 18px;
        height: 18px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }
}

`;