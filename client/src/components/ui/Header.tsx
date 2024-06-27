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
	},
	menu: {
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		borderRadius: '0px'
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: 1,
			color: 'white'
		}

	}

}));

interface HeaderProps {

}

interface TabType {
	label: string,
	path: string,
	id?: string,
	handleClickEvent?: (e: any) => void
}

interface MenuOptions {
	name: string,
	link: string
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

const Header : FC<HeaderProps> = ({ }) => {
	const classes = useStyles();
	const [tabValue, setTabValue] = useState<number>(0);
	const [anchorEl, setAnchorEL] = useState(null)
	const [open, setOpen] = useState<boolean>(false)
	const [selectedIndex, setSelectedIndex] = useState<number>(0)

	const handleClick = (e: any) => {
		setAnchorEL(e.currentTarget)
		setOpen(true)
	}

	const handleClose = () => {
		setAnchorEL(null)
		setOpen(false)
	}

	const handleMenuItemClick = (e: any, i: number) => { 
		setAnchorEL(null)
		setOpen(false)
		setSelectedIndex(i)
	}

	const tabs : TabType[]  = [
		{
			label: 'Home',
			path: '/'
		},
		{
			label: 'Services',
			path: '/services',
			id: 'simple-menu',
			handleClickEvent: (e : any) => handleClick(e),
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

	const menuOptions : MenuOptions[] = [
		{
			name: 'Services',
			link: '/services'
		},
		{
			name: 'Custom Software Development',
			link: '/customsoftware'
		},
		{
			name: 'Mobile App Development',
			link: '/mobileapps'
		},
		{
			name: 'Website Development',
			link: '/websites'
		}
	]

	const fixActiveTabRefresh = () => {
		const pathName = window.location.pathname
		switch(pathName) { 
			case '/':
				if(tabValue !== 0) {
					setTabValue(0)
				}
				break;
			case '/services':
				if(tabValue !== 1) {
					setTabValue(1)
					setSelectedIndex(0)
				}
				break;
			case '/customsoftware':
				if(tabValue !== 1) {
					setTabValue(1)
					setSelectedIndex(1)
				}
				break;
			case '/mobileapps':
				if(tabValue !== 1) {
					setTabValue(1)
					setSelectedIndex(2)
				}
				break;
			case '/websites':
				if(tabValue !== 1) {
					setTabValue(1)
					setSelectedIndex(3)
				}
				break;
			case '/revolution':
				if(tabValue !== 2) {
					setTabValue(2)
				}
				break;
			case '/about':
				if(tabValue !== 3) {
					setTabValue(3)
				}
				break;
			case '/contact':
				if(tabValue !== 4) {
					setTabValue(4)
				}
				break;
			default:
				break;			 
		}
		// if(pathName === '/' && tabValue !== 0 ) {
		// 	setTabValue(0)
		// }
		// else if (pathName === '/services' && tabValue !== 1) {
		// 	setTabValue(1)
		// }
		// else if (pathName === '/revolution' && tabValue !==2) {
		// 	setTabValue(2)
		// }
		// else if (pathName === '/about' && tabValue !==3) {
		// 	setTabValue(3)
		// }
		// else if (pathName === '/contact' && tabValue !==4) {
		// 	setTabValue(4)
		// }
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
				{tabs.map((tab,index) => (
					<Tab key={index} className={classes.tab} label={tab.label} component={Link} to={tab.path} onMouseOver={tab.handleClickEvent}/>
				))}
			</Tabs>
			<Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
			<Menu elevation={0} classes={{paper: classes.menu}} MenuListProps={{onMouseLeave: handleClose}} id='simple-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
				{menuOptions.map((option, index) => (
					<MenuItem key={index} classes={{root: classes.menuItem}} component={Link} to={option.link} onClick={(e) => {handleMenuItemClick(e,index); setTabValue(1);}} selected={index === selectedIndex && tabValue === 1}>{option.name}</MenuItem>
				))}
			</Menu>
			</Toolbar>
		</AppBar>	
		</ElevationScroll>
		<div className={classes.toolbarMargin}></div>
		</>
	)
}
export default Header