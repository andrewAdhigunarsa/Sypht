import * as React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    background-color: red;
`;
class Sypht extends React.Component{
    render(){
        return (
            <div>
                <StyledH1>Sypht</StyledH1>
                <p>
                    This is the Main page
                </p>

            </div>
            
        );
    }
}

export default Sypht;
