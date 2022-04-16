
import axios from 'axios';
import React,{Component} from 'react';



class App extends Component {
  
    state = {

      selectedFile: null
    };
    

    onFileChange = event => {
    
  
      this.setState({ selectedFile: event.target.files[0] });
    
    };
    
 
    onFileUpload = () => {
    
   
      const formData = new FormData();
    

      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    

      console.log(this.state.selectedFile);

      axios.post("api/uploadfile", formData);
    };
    

    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div>
            <h2>File Details:</h2>
             
<p>File Name: {this.state.selectedFile.name}</p>
 
             
<p>File Type: {this.state.selectedFile.type}</p>
 
             
<p>
          
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } else {
        return (
          <div>
            <br />

          </div>
        );
      }
    };
    
    render() {
    
      return (
        <div>
    
     
            <div>
                <input type="file" onChange={this.onFileChange} />
          
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
 
  export default App;

  