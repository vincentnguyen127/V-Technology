
import { FC } from "react";
import { Grid, Hidden, Theme } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import FooterAdornment from '../../assets/Footer Adornment.svg'
import { MenuOptions, menuOptions } from "./Header";
import { Link } from "react-router-dom";
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme: Theme) => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
		width: '100%',
		zIndex: 1302,
		position: 'relative',
	},
	adorment: {
		width: '25em',
		verticalAlign: 'bottom',
		[theme.breakpoints.down('md')]: {
			width: '15em'
		}
	},
	link: {
		color: 'white',
		fontFamily: 'Arial',
		fontSize: '0.75rem',
		fontWeight: 'bold',
	},
	footerMenuItem: {
		height: '10rem'
	},
	mainContainer: {
		position: 'absolute'
	},
	gridItem: {
		margin: '3em'
	},
	icon: {
		height: '4em',
		width: '4em',
		[theme.breakpoints.down('xs')]: {
			height: '2.5em',
			width: '2.5em'
		}

	},
	socialContainer: {
		position: 'absolute',
		marginTop: '-6em',
		right: '1.5em',
		[theme.breakpoints.down('xs')]: {
			right: '0.6em',
			bottom: '0.5em'
		}
	},


}))

export const revolutionOptions: MenuOptions[] = [
	{
		name: 'The Revolution',
		link: '/revolution',
		activeIndex: 3,
		selectedIndex: 0
	},
	{
		name: 'Vision',
		link: '/vision',
		activeIndex: 3,
		selectedIndex: 1
	},
	{
		name: 'Technology',
		link: '/technology',
		activeIndex: 3,
		selectedIndex: 2
	},
	{
		name: 'Process',
		link: '/process',
		activeIndex: 3,
		selectedIndex: 3
	}
]

export const aboutOptions: MenuOptions[] = [
	{
		name: 'About Us',
		link: '/about',
		activeIndex: 3,
		selectedIndex: 0
	},
	{
		name: 'History',
		link: '/history',
		activeIndex: 3,
		selectedIndex: 1
	},
	{
		name: 'Team',
		link: '/team',
		activeIndex: 3,
		selectedIndex: 2

	}
]

interface FooterProps {
	tabValue: number,
	setTabValue: (value: number) => void,
	selectedIndex: number,
	setSelectedIndex: (value: number) => void
}

const Footer: FC<FooterProps> = ({ tabValue, setTabValue, selectedIndex, setSelectedIndex }) => {
	const classes = useStyles()


	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid container className={classes.mainContainer} justifyContent='center' >
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid item onClick={() => setTabValue(0)} className={classes.link} component={Link} to='/'>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							{menuOptions.map((option) => (
								<Grid item onClick={() => { setTabValue(option.activeIndex); setSelectedIndex(option.selectedIndex) }} className={classes.link} component={Link} to={option.link}>
									{option.name}
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							{revolutionOptions.map((option) => (
								<Grid item onClick={() => setTabValue(2)} className={classes.link} component={Link} to={option.link}>
									{option.name}
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							{aboutOptions.map((option) => (
								<Grid item onClick={() => setTabValue(3)} className={classes.link} component={Link} to={option.link}>
									{option.name}
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid item onClick={() => setTabValue(4)} className={classes.link} component={Link} to='contact'>
								Contac Us
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<img src={FooterAdornment} alt="footer image" className={classes.adorment} />
			<Grid container spacing={2} className={classes.socialContainer} justifyContent="flex-end">
				<Grid item component={'a'} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
					<img src={facebook} alt="facebook" className={classes.icon} />
				</Grid>
				<Grid item component={'a'} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
					<img src={twitter} alt="twitter" className={classes.icon} />
				</Grid>
				<Grid item component={'a'} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
					<img src={instagram} alt="instagram" className={classes.icon} />
				</Grid>
			</Grid>
		</footer>
	);
}

export default Footer;