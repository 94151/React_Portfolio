import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Hi, i'm Muskan!</h1> 
                 <p> Muskan is a passionate web developer developed high-quality websites and scalable apps for business. 
                 She is hard working, quick learner, and good to manage multiple projects simultaneously. 
                 During her college journey, She did various online Courses or Certification as well as 
                  worked on multiple projects related to web development, Digital Marketing, and freelance writing. 

                 She has done Four-month Internship at SGIT. She is the recipient of Google Udacity India Challange 
                 Scholarship for "Mobile Web Specialization" Track, as well as the recipient of "Bertelsmann DataScience Scholarship".
                 She is an internet nerd, seeking for high-quality content courses, free available for geeks. In off time, 
                 you will find her writing various articles on her blog, watching videos on youtube and contributing to open source projects. 
                 </p>
             </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;