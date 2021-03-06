import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin:5px auto 0;
    padding-left: 15px;
    padding-right: 15px;
`

export const HomeLeft = styled.div`
    float : left
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    > img {
        height: 270px;
        background-color: hsla(0,0%,71%,.2);
        margin-bottom:30px;
    }
`

export const TopicWrapper = styled.div`
        padding-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
        > a:not(:last-child) {
            display: inline-block;
            margin: 0 18px 18px 0;
            min-height: 32px;
            background-color: #f7f7f7;
            border: 1px solid #dcdcdc;
            border-radius: 4px;
            vertical-align: top;
            overflow: hidden;
            color: #333;
        }
        
        > a > img{
            float:left;
            width: 32px;
            height: 32px;   
            vertical-align:middle;
        }
        > a > span {
            font-size:14px;
            line-height:32px;
            padding: 0 11px 0 10px;
        }
        a:last-child{
            // display:inline-block;
            line-height:32px;
            color: #787878;
            white-space:nowrap;
            // overflow:hidden;
            // text-overflow:ellipsis;
        }
`;

export const InfoWrapper = styled.div`
    > div{
    
        position: relative;
        width: 100%;
        margin: 15px 0 ;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
    }
    > div > a{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 0;
        width: 125px;
        height: 100px;
    }
    
    > div > a img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
`;

export const ContentWrapper = styled.div`
    padding-right:140px
    .title{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }
    .desc{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const Meta = styled.div`
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #b4b4b4;
    a{
        margin-right: 10px;
        color: #b4b4b4;
    }
    span{
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
`;

export const HomeRight = styled.div`
    float : right;
    width: 280px;
    position:relative;
`;

export const AdWrapper = styled.div`
    padding: 30px 0 0;
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    img {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`;

export const AuthorWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
`;

export const AuthorTitle = styled.div`
    margin-top:30px;
    text-align: left;
    font-size: 14px;
    color: #969696;
    a{
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
    }
    a:hover{
        color:#868686;
    }
`;

export const AuthorList = styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
    li{
        margin-top: 15px;
        line-height: 20px;
    }
    .avatar{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
        cursor: pointer;
    }
    .avatar > img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        border-color: #42c02e
    }
    .name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    p{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`

export const MoreAuthor = styled.a`
    position: absolute;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
`;

export const More = styled.a`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    display:block;
    box-sizing: border-box;
`;

export const GoTop = styled.div`
    position : fixed;
    right:100px;
    bottom:100px;
    width: 50px;
    height: 50px;
    line-height:50px;
    text-align: center;
    border-bottom: 1px solid #dcdcdc;
    background-color: #fff;
    transition: .1s ease-in;
}
`;