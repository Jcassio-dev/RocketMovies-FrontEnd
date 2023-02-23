import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 32px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    border-radius: 10px;

    margin-bottom: 24px;
    
    > div{
        margin-bottom: 15px;
    }
    > p {
        overflow: hidden; 
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical; 


        font-size: 16px;
        color: ${({theme}) => theme.COLORS.GRAY_100};

        margin-bottom: 25px;
    }
`