import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div `
    padding:30px;
`;
const StyledH1 = styled.h1`
  margin-top: 0;
`;

class DateCalculator extends React.Component{
    render(){
        return (
          <StyledDiv>
           
              <StyledH1>DateCalculator</StyledH1>
            
          </StyledDiv>
        );
    }
}

export default DateCalculator;
