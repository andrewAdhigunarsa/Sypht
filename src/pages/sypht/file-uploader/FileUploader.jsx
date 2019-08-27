import React, { Component } from 'react'
import Axios from 'axios';

export default class FileUploader extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedFile: null,
            uploadedFile:null
        }
    }
    
    fileSelectHandler=(event) => {
        console.log(event.target.files[0])
        this.setState({selectedFile:event.target.files[0]})
    }

    fileUploadHandler= async(e)=>{
        e.preventDefault();
        const accessToken = sessionStorage.getItem('syphtToken');
        const url= "http://localhost:3003/upload";
        const formData = new FormData();
        formData.append('file',this.state.selectedFile);
        formData.append('syphtToken',accessToken);

        console.log(this.state.selectedFile)
        try{
            const res = Axios.post(url,formData,{onUploadProgress: ProgressEvent=>console.log(ProgressEvent)})
            this.setState({ uploadedFile: res.data });
         }catch(e){
             console.log(e)
        }
    }

    render() {
        return (
            <form className='file-uploader' onSubmit={this.fileUploadHandler}>
                <input type="file" name="document" onChange={this.fileSelectHandler}/>
                <input type="submit" value="upload"/>
            </form>
        )
    }
}
