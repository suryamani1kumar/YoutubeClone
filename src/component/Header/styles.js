import styled from 'styled-components';

export const Maincontainer = styled.div`
position:absolute;
top:0;
right:40px;
background:#fff;
width:300px;
height:727px;
border-bottom:1px solid #606060;
border-left:1px solid #606060;
border-right:1px solid #606060;

`
export const Accountcontainer = styled.div`
display:flex;
align-items:center;
padding:16px;
height:83px;
border-bottom:1px solid #606060;
div{
    display:flex;
    flex-direction:column;
    color:#303030;
     
}
span:last-child{
    color:red;
}
`
export const PersonalAccountcontainer = styled.div`
height:177px;
padding:8px 0;
border-bottom:1px solid #606060;
div{
    padding:0 16px;
    height:40px;
    display:flex;
    align-items:center;
    &:hover{
        background:#D3D3D3;
    }
}
    



`
export const Membershipscontainer = styled(PersonalAccountcontainer)`
height:97px;
`
export const LoactionContainer = styled(PersonalAccountcontainer)`
height:217px;
`
export const Sittingcontainer = styled(PersonalAccountcontainer)`
height:57px;
`
export const Helpcontainer = styled(PersonalAccountcontainer)`
height:96px;

`

