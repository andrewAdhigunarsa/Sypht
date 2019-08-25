import React, { Component } from 'react'

export default class FileUploader extends Component {
    render() {
        return (
            <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="avatar" />
            </form>
        )
    }
}
