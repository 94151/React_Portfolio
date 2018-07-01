import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Achievements extends Component {
  render() {
    return(
      <Grid className="landing-grid">
       <div className="banner-text">
      
     
              <h1>Achievements</h1>

            <hr/>
     
        <Cell col={12}>
               <p>“Front End Developer” Four Month In Office Internship at SGIT (Startup Located at Gurgaon) </p>
               <p>“Full Stack Web Developer” completion certificate of Udacit</p>
               <p>“Google Udacity Challenge Scholarship” recipient for Mobile Web Speciapzation Track.</p>
               <p>“Bertelsmann Data Science Scholership” recipient for Data Analyst Track</p>
               <p>“Cortana: Your Virtual Assistant” Ebook Author available on Amazon Kindle</p>
              
      </Cell>
     
     </div>
     </Grid>
    )
  }
}

export default Achievements;