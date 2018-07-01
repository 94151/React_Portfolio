import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid className="landing-grid">
       <div className="banner-text">
      
     
              <h1>Education</h1>

            <hr/>
     
        <Cell col={12}>
            <h2>Madhav Institute of Technology and Science</h2> 
            <p>Bachelor of Enginnering<br/>
            2014-2018</p> 
            <hr/>
            <h2>Govt. Girls Inter College </h2>   
            <p>InterMediate<br/>
            2011-2013</p>  
            <hr/>
            <h2>Govt. Girls Inter College </h2>   
            <p>High School<br/>
            2010-2011</p>        
      </Cell>
     
     </div>
     </Grid>
    )
  }
}

export default Education;