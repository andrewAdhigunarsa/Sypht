import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    
    margin:0;
    box-sizing: border-box;
`;

const StyleUl = styled.ul`
    padding:0;
    box-sizing: border-box;
`;

const StyledLi = styled.li`
    display:inline;
    box-sizing: border-box;
    
`;

const StyledLink = styled(Link)`
    box-sizing: border-box;
    color: lightgrey;
    font-size: 34px;
    line-height:40px;
     padding: 30px;
    font-family: helvetica;
    text-decoration: none;
    transition:.2s ease-in;
    :hover{
        color:grey;
        font-size: 40px;
        line-height: 40px;
    }
`;

export class header extends Component {
    render() {
        return (
            <StyledNav className="sypth-navigation">
                <StyleUl>
                    <StyledLi><StyledLink to="/">Sypth</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/date-calculator">Date calculator</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/pie-loader">Pie Loader</StyledLink></StyledLi>
                </StyleUl>
            </StyledNav>
        );
    }
}

export default header;
