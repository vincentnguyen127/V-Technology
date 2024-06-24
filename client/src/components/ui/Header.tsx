import React, {FC, useState} from 'react';
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg'


const useStyles = makeStyles( (theme : any)  => ({ 
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em'
	},
	logo: {
		height: '7em'
	},
	tabContainer: {
		marginLeft: 'auto'

	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
	button: {
		...theme.typography.estimate,
		marginLeft: '50px',
		marginRight: '25px',
		borderRadius: '50px',
		height: '45px'
	}

}));

interface HeaderProps {

}

interface Tab {
	label: string,
	path: string
}

function ElevationScroll(props : any) {
	const { children } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
	  disableHysteresis: true,
	  threshold: 0
	});
  
	return React.cloneElement(children, {
	  elevation: trigger ? 4 : 0,
	});
  }

  const tabs : Tab[]  = [
	{
		label: 'Home',
		path: ''
	},
	{
		label: 'Services',
		path: ''
	},
	{
		label: 'The Revolution',
		path: ''
	},
	{
		label: 'About Us',
		path: ''
	},
	{
		label: 'Contact Us',
		path: ''
	},

  ]
  

const Header : FC<HeaderProps> = ({ }) => {
	const classes = useStyles();
	const [tabValue, setTabValue] = useState<number>(0);

	// const handleTabChange = (event , index) => {
	// 	console.log(event)
	// 	setTabValue(index)
	// }

	return (
		<>
		<ElevationScroll>
		<AppBar >
			<Toolbar disableGutters>
				<img src={logo} alt="company logo" className={classes.logo}/>
				<Tabs value={tabValue} className={classes.tabContainer}>
				{tabs.map((tab) => (
					<Tab className={classes.tab} label={tab.label} />
				))}
			</Tabs>
			<Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
			</Toolbar>
		</AppBar>	
		</ElevationScroll>
		<div className={classes.toolbarMargin}></div>
		</>
	)
}
export default Header