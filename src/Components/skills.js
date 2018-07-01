import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid className="landing-grid">
       <div className="banner-text">
      
     
              <h1>Skills</h1>

            <hr/>
        <Grid>  
        <Cell col={6}>
          <p>HTML 5</p>
          <ProgressBar progress={44} />
        </Cell>
        <Cell col={6}>
           <p>CSS3</p>
          <ProgressBar progress={44} />
        </Cell>
        <Cell col={6}>
         <p>JavaScript</p>
          <ProgressBar progress={44} />
        </Cell>
        <Cell col={6}>
          <p>React Js</p>
          <ProgressBar progress={44} />
        </Cell>
        <Cell col={6}>
          <p>Progressive Web Apps</p>
          <ProgressBar progress={44} />
        </Cell>
        <Cell col={6}>
          <p>Python 3</p>
          <ProgressBar progress={44} />
        </Cell>

        </Grid>
      
     
     </div>
     </Grid>
    )
  }
}

export default Skills;