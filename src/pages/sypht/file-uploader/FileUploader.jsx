import React, { Component } from 'react'
import Axios from 'axios';

export default class FileUploader extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedFile: null
        }
    }
    
    fileSelectHandler=event => this.setState({selectedFile:event.target.files[0]})

    fileUploadHandler=()=>{
        const formData = new FormData();
        formData.append('fileToUpload',this.state.selectedFile,this.state.selectedFile.name)
        formData.append("fieldSets", JSON.stringify(["sypht.invoice", "sypht.document"]));
        const accessToken = sessionStorage.getItem('syphtToken')
        const options = {
          url: "https://api.sypht.com/fileupload",
          formData: {
            fileToUpload:'',
            fieldSets: JSON.stringify(["sypht.generic"])
          },
          headers: {
            Authorization: `Bearer ${JSON.parse(accessToken).access_token}`
          },
          json: true
        };
        console.log(this.state.selectedFile)
        console.log(options);
        Axios.post("https://api.sypht.com/fileupload",formData,{
            onUploadProgress: ProgressEvent=>{
                console.log(ProgressEvent);
            }
        }).then(res =>
          console.log(res)
        );
    }

    render() {
        return (
            <div className='file-uploader'>
                <input type="file" name="document" onChange={this.fileSelectHandler}/>
                <button onClick={this.fileUploadHandler}>Submit</button>
            </div>
        )
    }
}
