import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';

import Projects from './projects';
import Resume from './resume';
import Skills from './skills';
import Education from './education';
import Achievements from './achievements'

const Main = () => (
  <Switch>
    <Route exact path="/landingpage" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/skills" component={Skills} />
    <Route path="/education" component={Education} />
    <Route path="/achievements" component={Achievements} />
  </Switch>
)

export default Main;