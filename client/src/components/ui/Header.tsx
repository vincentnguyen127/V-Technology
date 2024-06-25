import React, {FC, useEffect, useState} from 'react';
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button, Menu, MenuItem  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';


const useStyles = makeStyles( (theme : any)  => ({ 
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em'
	},
	logo: {
		height: '8em'
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
	},
	logoContainer: {
		padding: 0,
		"&:hover" : {
			backgroundColor: "transparent"
		}
	}

}));

interface HeaderProps {

}

interface TabType {
	label: string,
	path: string,
	id?: string,
}

function ElevationScroll(props : any) {
	const { children } = props;

	const trigger = useScrollTrigger({
	  disableHysteresis: true,
	  threshold: 0
	});
  
	return React.cloneElement(children, {
	  elevation: trigger ? 4 : 0,
	});
  }

  const tabs : TabType[]  = [
	{
		label: 'Home',
		path: '/'
	},
	{
		label: 'Services',
		path: '/services'
	},
	{
		label: 'The Revolution',
		path: '/revolution'
	},
	{
		label: 'About Us',
		path: '/about'
	},
	{
		label: 'Contact Us',
		path: '/contact'
	},
  ]

 

const Header : FC<HeaderProps> = ({ }) => {
	const classes = useStyles();
	const [tabValue, setTabValue] = useState<number>(0);
	const [anchorEl, setAnchorEL] = useState(null)
	const [open, setOpen] = useState<boolean>(false)

	const handleClick = (e: any) => {
		setAnchorEL(e.currentTarget)
		setOpen(true)
	}

	const handleClose = (e: any ) => {
		setAnchorEL(null)
		setOpen(false)
	}

	const fixActiveTabRefresh = () => {
		const pathName = window.location.pathname
		if(pathName === '/' && tabValue !== 0 ) {
			setTabValue(0)
		}
		else if (pathName === '/services' && tabValue !== 1) {
			setTabValue(1)
		}
		else if (pathName === '/revolution' && tabValue !==2) {
			setTabValue(2)
		}
		else if (pathName === '/about' && tabValue !==3) {
			setTabValue(3)
		}
		else if (pathName === '/contact' && tabValue !==4) {
			setTabValue(4)
		}
	} 

	useEffect(() => {
		fixActiveTabRefresh()
	},[tabValue])

	return (
		<>
		<ElevationScroll>
		<AppBar >
			<Toolbar disableGutters>
				<Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={() => setTabValue(0)}>
				<img src={logo} alt="company logo" className={classes.logo}/>
				</Button>
				<Tabs value={tabValue} className={classes.tabContainer} onChange={(e, index) => setTabValue(index)} indicatorColor='primary'>
				{tabs.map((tab) => (
					<Tab className={classes.tab} label={tab.label} component={Link} to={tab.path}/>
				))}
			</Tabs>
			<Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
			<Menu id='simple-menu' anchorEl={anchorEl} open={open} onClose={handleClose}/>
				<MenuItem onClick={handleClose}>Custom Software Development</MenuItem>
				<MenuItem onClick={handleClose}>Mobile App Development</MenuItem>
				<MenuItem onClick={handleClose}>Website Development</MenuItem>
			</Toolbar>
		</AppBar>	
		</ElevationScroll>
		<div className={classes.toolbarMargin}></div>
		</>
	)
}
export default Header