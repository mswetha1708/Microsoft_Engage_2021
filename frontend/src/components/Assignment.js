import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import Button from '@mui/material/Button';
export class SubmitAssignment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AssignmentData: []
    }
  }
  toArrayBuffer(buf) {
      var ab = new ArrayBuffer(buf.length);
      var view = new Uint8Array(ab);
      for (var i = 0; i < buf.length; ++i) {
          view[i] = buf[i];
      }
      return ab;
  }
  downloadAssignmentData(index) {
                    console.log("Hello")
                    console.log(index)
                    let arraybuffer = this.toArrayBuffer(this.state.AssignmentData[index].Question.data);
                    let blob = new Blob([arraybuffer],{
                    type: 'application/pdf',
                    });
                      const link = document.createElement('a');
                      // create a blobURI pointing to our Blob
                      link.href = URL.createObjectURL(blob);
                      link.download = this.state.AssignmentData[index].AssignmentName+"_"+this.state.AssignmentData[index].Aid+".pdf";
                      // some browser needs the anchor to be in the doc
                      document.body.append(link);
                      link.click();
                      link.remove();
                      // in case the Blob uses a lot of memory
                      setTimeout(() => URL.revokeObjectURL(link.href), 7000);
  }
  componentDidMount() {
  const id = localStorage.getItem('id')
  const email = localStorage.getItem('Email')
          Axios.post('http://localhost:3001/assignments',{
            email: email,
            cid: id,
          }).then(response => {
      console.log(response.data);
      this.setState({
        AssignmentData: response.data
      });
    });
  }
  render() {
    console.log(this.state.AssignmentData);
    return (
      <TableContainer component={Paper}>
        <Table stickyHeader  aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}}>Id</TableCell>
              <TableCell align="right" style={{fontWeight: "bold"}}>AssignmentName</TableCell>
              <TableCell align="right" style={{fontWeight: "bold"}}>Due-Date</TableCell>
              <TableCell align="right" style={{fontWeight: "bold"}}>QuestionPDF</TableCell>
              <TableCell align="right" style={{fontWeight: "bold"}}>SolutionPDF</TableCell>
              <TableCell align="right" style={{fontWeight: "bold"}}>UploadAnswer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.AssignmentData.map((p, index) => {
                return <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {parseInt(index+1)}
                  </TableCell>
                  <TableCell align="right">{p.AssignmentName}</TableCell>
                  <TableCell align="right">{new Date(p.DueDate).toLocaleDateString()}</TableCell>
                  <TableCell align="right" value={index} onClick={() => this.downloadAssignmentData(index)}> <Button> Download</Button></TableCell>
                  <TableCell align="right"><Button> Upload</Button></TableCell>
                  <TableCell align="right"><Button variant="contained"> SUBMIT</Button></TableCell>
                </TableRow>
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default SubmitAssignment