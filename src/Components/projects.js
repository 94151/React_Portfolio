import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class Project extends Component{
	render(){
		return(
			<Grid>
			 <Cell col={12}>
               <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
				    <CardTitle style={{color: '#000', height: 'auto'}}>
				    <h1>Project 1: <b>Migrate Hub</b></h1></CardTitle>
				    <CardText>
				        <ul>
				         <li>Develop project website for migrate overseas using HTMl5, CSS3, JavaScript, Bootstrap3.</li>
						<li>During Internship worked on Database SQL, Wordpress, Adobe Photoshop, and Git.</li>
						<li>Responsibilities include Design, Development, Maintenance, Management, and Marketing.</li> 
						<li>Collaborate with designers to create clean interface and simple, intuitive interactions and experiences.</li>
						<li>Work with senior developer to manage large, complex design projects for corporate clients. </li>
						
				        </ul>
				    </CardText>
				    <CardActions border>
				      
				        <Button colored><a href="http://migratehub.com/" rel="noopener noreferrer" target="_blank">
				        Get Started</a></Button>
				    </CardActions>
				   
				</Card>
			 </Cell>

			 <Cell col={12}>
                <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
				    <CardTitle style={{color: '#000', height: 'auto'}}>
				    <h1>Project 2: <b>Neighbourhood Maps</b></h1></CardTitle>
				    <CardText>
				        <ul>
				         <li>Develop a single-page application featuring a map of Gwalior city.</li>
							<li>Add map markers to identify popular cafe location, a search function to easily discover these locations.</li>
							<li>Use third-party APIs that provide additional information about each of these locations.</li>
						
				        </ul>
				    </CardText>
				    <CardActions border>
				      
				        <Button colored><a href="/" rel="noopener noreferrer" target="_blank">
				        Get Started</a></Button>
				    </CardActions>
				   
				</Card>
			 </Cell>

			</Grid>
		
            	)
	}
}

 export default Project;