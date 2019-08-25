import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL, CALCULATOR_URL, PIE_LOADER_URL } from '../../App';

const StyledNav = styled.nav`
    
    margin:0;
    box-sizing: border-box;
`;

const StyleUl = styled.ul`
    padding:0;
    box-sizing: border-box;
    display:flex;
`;

const StyledLi = styled.li`
    display:inline;
    box-sizing: border-box;
    
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  color: lightgrey;
  font-size: 34px;
  line-height: 40px;
  padding: 30px;
  font-family: helvetica;
  text-decoration: none;
  transition: 0.2s ease-in;
  :hover {
    color: grey;
    font-size: 40px;
    line-height: 40px;
  }
  @media only screen and (max-width: 600px) {
      padding:15px;
    font-size: 14px;
    line-height: 20px;
    :hover {
      font-size: 20px;
      line-height: 20px;
    }
  }
`;

export class header extends Component {
    render() {
        return (
            <StyledNav className="sypth-navigation">
                <StyleUl>
                    <StyledLi><StyledLink to={BASE_URL}>Sypth</StyledLink></StyledLi>
                    <StyledLi><StyledLink to={CALCULATOR_URL}>Date calculator</StyledLink></StyledLi>
                    <StyledLi><StyledLink to={PIE_LOADER_URL}>Pie Loader</StyledLink></StyledLi>
                </StyleUl>
            </StyledNav>
        );
    }
}

export default header;
