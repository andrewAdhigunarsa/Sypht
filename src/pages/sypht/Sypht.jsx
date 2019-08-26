import * as React from 'react';
import styled from 'styled-components';
import FileUploader from './file-uploader/FileUploader';

const StyledDiv = styled.div`
    padding:30px;
`;

const StyledH1 = styled.h1`
    margin-top:0;
`;
class Sypht extends React.Component{

   
    render(){
        return (
            <StyledDiv>
                <StyledH1>Sypht</StyledH1>
                <FileUploader/>

            </StyledDiv>
            
        );
    }
}

export default Sypht;
