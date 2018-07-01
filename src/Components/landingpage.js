import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}} scroll>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://monaschool.com.ng/wp-content/uploads/2017/12/a.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Wordpress | SQL | Python</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/muskan21jain/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/94151" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://twitter.com/Muskan21jain" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

          {/* Medium */}
          <a href="https://medium.com/@muskan210497" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-medium" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;