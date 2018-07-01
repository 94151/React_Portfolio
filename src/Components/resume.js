import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';

class Resume extends Component{
	render(){
		return(
            <Grid className="landing-grid">
       <div className="banner-text">
      
     
              <h1>HIRE ME!</h1>

            <hr/>
     
        <Cell col={12}>
         <Button raised accent ripple><a href="https://drive.google.com/open?id=19cTE3NVBK14kyJFf6nTQtdfZiNroC1ua" 
          rel="noopener noreferrer" target="_blank">Download Resume</a></Button>       
        </Cell>
     
     </div>
     </Grid>
			)
	}
}

 export default Resume;