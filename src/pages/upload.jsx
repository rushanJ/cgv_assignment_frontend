import React from 'react'
import axios from 'axios';
 
class FileUpload extends React.Component{
 
    constructor(){
        super();
        this.state = {
            selectedFile:'',
            moduleCode: '',
            moduleName: '',
            date: '',
        }
 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleModuleCodeChange = this.handleModuleCodeChange.bind(this);
        this.handleModuleNameChange = this.handleModuleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    handleModuleCodeChange(event) {
      this.setState({
        moduleCode: event.target.value,
        })
  }
  
  handleModuleNameChange(event) {
    this.setState({
      moduleName: event.target.value,
      })
}

handleDateChange(event) {
  this.setState({
    date: event.target.value,
    })
}
 
    submit(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        data.append('moduleCode', this.state.moduleCode)
        data.append('moduleName', this.state.moduleName)
        data.append('date', this.state.date)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:8000/api/file/";
 
        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
        })
 
    }
 
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />
 
                            <h3 className="text-white">React File Upload</h3>
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md
                                -6">
                                    <label className="text-white">Module Code</label>
                                    <input type="text" className="form-control" name="moduleCode" onChange={this.handleModuleCodeChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md
                                -6">
                                    <label className="text-white">Module Name</label>
                                    <input type="text" className="form-control" name="moduleName" onChange={this.handleModuleNameChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md
                                -6">
                                    <label className="text-white">Date</label>
                                    <input type="date" className="form-control" name="moduleCode" onChange={this.handleDateChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md
                                -6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            
 
                            <div className="form-row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default FileUpload;
