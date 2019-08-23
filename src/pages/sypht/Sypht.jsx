import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding:30px;
`;

const StyledH1 = styled.h1`
    margin-top:0;
    background-color: red;
`;
class Sypht extends React.Component{
    render(){
        return (
            <StyledDiv>
                <StyledH1>Sypht</StyledH1>
                <p>
                    This is the Main page
                </p>

            </StyledDiv>
            
        );
    }
}

export default Sypht;
