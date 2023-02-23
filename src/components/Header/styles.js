import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    grid-area: header;
    
    width: 100%;
    height: 105px;
    
    display: flex;
    align-items: center;
    padding: 24px 100px;
    gap: 64px;

    >h1{
        color: ${({theme})=> theme.COLORS.PINK};
        font-size: 24px
    }


    border-bottom: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_800};
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    >img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
    > div{
        display: flex;
        flex-direction: column;
        width: 80px;
        text-align: end;
        margin-right: 9px;

        span{
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 14px;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`

