import styled from 'styled-components';

export const Maincontainer = styled.div`
position:absolute;
top:0;
right:40px;
background:#fff;
width:300px;
height:700px;
border-bottom:1px solid #606060;
border-left:1px solid #606060;
border-right:1px solid #606060;

`
export const Firstcontainer = styled.div`
display:flex;
align-items:center;
padding:10px;
border-bottom:1px solid #606060;

div{
    display:flex;
    flex-direction:column;
    color:#303030;
    padding-left:10px
     
}
span:last-child{
    color:red;
}

`

export const Secondcontainer = styled.div`
display:flex;
flex-direction:column;
border-bottom:1px solid #606060;
div{
    padding:0 16px;
    display:flex;
    align-items:center;
}
`
