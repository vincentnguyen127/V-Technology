import React, { FC, useEffect, useState } from 'react';
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button, Menu, MenuItem, useTheme, useMediaQuery, SwipeableDrawer, IconButton, List, ListItemText, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu'



const useStyles = makeStyles((theme: any) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em'
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '1.25em'
		}
	},
	logo: {
		height: '8em',
		[theme.breakpoints.down('md')]: {
			height: '7em'
		},
		[theme.breakpoints.down('xs')]: {
			height: '5.5em'
		}
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
		"&:hover": {
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
	},
	drawerIconContainer: {
		"&:hover": {
			backgroundColor: theme.palette.primary.main
		},
		marginLeft: 'auto',
	},
	drawerIcon: {
		height: '3rem',
		width: '3rem'
	},
	drawer: {
		backgroundColor: theme.palette.primary.main
	},
	drawerItem: {
		...theme.typography.tab,
		color: 'white',
		opacity: 0.7
	},
	drawerItemEstimate: {
		backgroundColor: '#FFBA60'
	},
	drawerItemSelected: {
		opacity: 1
	}

}));

interface HeaderProps {
	tabValue: number,
	setTabValue: (value: number) => void,
	selectedIndex: number,
	setSelectedIndex: (value: number) => void
}

interface TabType {
	name: string,
	link: string,
	activeIndex: number,
	handleClickEvent?: (e: any) => void,
	selectedIndex?: number
}

export interface MenuOptions extends TabType {
	selectedIndex: number
}

function ElevationScroll(props: any) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

export const menuOptions: MenuOptions[] = [
	{
		name: 'Services',
		link: '/services',
		activeIndex: 1,
		selectedIndex: 0
	},
	{
		name: 'Custom Software Development',
		link: '/customsoftware',
		activeIndex: 1,
		selectedIndex: 1
	},
	{
		name: 'Mobile App Development',
		link: '/mobileapps',
		activeIndex: 1,
		selectedIndex: 2
	},
	{
		name: 'Website Development',
		link: '/websites',
		activeIndex: 1,
		selectedIndex: 3
	}
]

const Header: FC<HeaderProps> = ({ tabValue, setTabValue, selectedIndex, setSelectedIndex }) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEL] = useState(null)
	const [openMenu, setOpenMenu] = useState<boolean>(false)
	const [openDrawer, setOpenDrawer] = useState<boolean>(false)
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	const handleClick = (e: any) => {
		setAnchorEL(e.currentTarget)
		setOpenMenu(true)
	}

	const handleClose = () => {
		setAnchorEL(null)
		setOpenMenu(false)
	}

	const handleMenuItemClick = (e: any, i: number) => {
		setAnchorEL(null)
		setOpenMenu(false)
		setSelectedIndex(i)
	}

	const tabs: TabType[] = [
		{
			name: 'Home',
			link: '/',
			activeIndex: 0
		},
		{
			name: 'Services',
			link: '/services',
			activeIndex: 1,
			handleClickEvent: (e: any) => handleClick(e),
		},
		{
			name: 'The Revolution',
			link: '/revolution',
			activeIndex: 2
		},
		{
			name: 'About Us',
			link: '/about',
			activeIndex: 3
		},
		{
			name: 'Contact Us',
			link: '/contact',
			activeIndex: 4
		},
	]

	useEffect(() => {
		// fixActiveTabRefresh()

		[...menuOptions, ...tabs].forEach(route => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (tabValue !== route.activeIndex) {
						setTabValue(route.activeIndex)
						if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
							setSelectedIndex(route.selectedIndex);
						}
					}
					break;
				default:
					break;
			}
		})
	}, [tabValue, menuOptions, selectedIndex, tabs])

	const tabsRender = (
		<>
			<Tabs value={tabValue} className={classes.tabContainer} onChange={(e, index) => setTabValue(index)} indicatorColor='primary'>
				{tabs.map((tab, index) => (
					<Tab key={index} className={classes.tab} label={tab.name} component={Link} to={tab.link} onMouseOver={tab.handleClickEvent} />
				))}
			</Tabs>
			<Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
			<Menu elevation={0} classes={{ paper: classes.menu }} MenuListProps={{ onMouseLeave: handleClose }} id='simple-menu' anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
				{menuOptions.map((option, index) => (
					<MenuItem key={index} classes={{ root: classes.menuItem }} component={Link} to={option.link} onClick={(e) => { handleMenuItemClick(e, index); setTabValue(1); }} selected={index === selectedIndex && tabValue === 1}>{option.name}</MenuItem>
				))}
			</Menu>
		</>
	)

	const drawer = (
		<>
			<SwipeableDrawer classes={{ paper: classes.drawer }} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
				<List>
					{tabs.map((tab, index) => (
						<ListItem selected={tabValue === index} button divider key={index} onClick={() => { setOpenDrawer(false); setTabValue(index) }} component={Link} to={tab.link}>
							<ListItemText className={tabValue === index ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} disableTypography>{tab.name}</ListItemText>
						</ListItem>
					))}
					<ListItem button divider className={classes.drawerItemEstimate} onClick={() => setOpenDrawer(false)} component={Link} to='/freeestimate'>
						<ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
					</ListItem>

				</List>
			</SwipeableDrawer>
			<IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} >
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</>
	)

	return (
		<>
			<ElevationScroll>
				<AppBar >
					<Toolbar disableGutters>
						<Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={() => setTabValue(0)}>
							<img src={logo} alt="company logo" className={classes.logo} />
						</Button>
						{matches ? drawer : tabsRender}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin}></div>
		</>
	)
}
export default Header