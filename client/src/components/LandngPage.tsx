import Lottie from 'react-lottie'
//@ts-ignore
import animationData from '../animations/landinganimation/data'
import { Button, Grid, Typography, makeStyles, useTheme, useMediaQuery, Card, CardContent, CardActions } from '@material-ui/core'
import { FC } from 'react'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'

const useStyles = makeStyles((theme: any) => ({
	animation: {
		maxWidth: '50em',
		minWidth: '21em',
		marginTop: '2em',
		marginLeft: '10%',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '30em'
		}
	},
	estimateButton: {
		...theme.typography.estimate,
		backgroundColor: theme.palette.secondary.main,
		borderRadius: 50,
		height: 45,
		width: 145,
		marginRight: 40,
		padding: 5,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light
		}
	},
	buttonContainer: {
		marginTop: '1em'
	},
	learnButtonHero: {
		borderColor: theme.palette.primary.main,
		color: theme.palette.primary.main,
		borderWidth: 2,
		textTransform: 'none',
		borderRadius: 50,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '0.9rem',
		height: 45,
		padding: 5,
		width: 145,
		[theme.breakpoints.down('sm')]: {
			marginBottom: '2em'
		}
	},
	mainContainer: {
		marginTop: '5em',
		[theme.breakpoints.down('md')]: {
			marginTop: '3em'
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '2em'
		}
	},
	heroTextContainer: {
		minWidth: '21em',
		marginLeft: '1em',
		[theme.breakpoints.down('xs')]: {
			marginLeft: '0'
		}
	},
	icon: {
		marginLeft: '2em',
		[theme.breakpoints.down('xs')]: {
			marginLeft: 0
		}
	},
	serviceContainer: {
		marginTop: '12em',

	},
	revolutionBackground: {
		backgroundImage: `url(${revolutionBackground})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100%',
		width: '100%'
	},
	revolutionCard: {
		position: 'absolute',
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: '10em',
		[theme.breakpoints.down('sm')]: {
			padding: '8em 0',
			borderRadius: 0,
			width: '100%'
		}
	}
}))

interface LandingPageProps {

}

const LandingPage: FC<LandingPageProps> = () => {
	const classes = useStyles()
	const theme = useTheme()
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};


	return (
		<>
			<Grid container direction='column' justifyContent='center' className={classes.mainContainer}>
				<Grid item> {/*-----Hero Block------*/}
					<Grid container justifyContent='flex-end' alignItems='center'>
						<Grid item sm className={classes.heroTextContainer}>
							<Typography variant='h2' align='center'>Bringing West Coast Technology<br />to the Midwest</Typography>
							<Grid container justifyContent='center' alignItems='center' className={classes.buttonContainer}>
								<Grid item>
									<Button variant='contained' className={classes.estimateButton}>
										FREE ESTIMATE
									</Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' className={classes.learnButtonHero}>
										LEARN MORE
									</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid item sm className={classes.animation}>
							<Lottie options={defaultOptions} height={'100%'} width={'100%'} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item> {/*-----Services Block------*/}
					<Grid container className={classes.serviceContainer} justifyContent={matchesSM ? 'center' : undefined}>
						<Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
							<Typography variant='h4'>
								Custom Software Development
							</Typography>
							<Typography variant='subtitle1' style={{ marginBottom: '1rem' }}>
								Save Energey. Save Time. Save Money.
							</Typography>
							<Typography variant='subtitle2'>
								Complete ditital solutions, from investigation to <span style={{ fontFamily: 'Pacifico', color: theme.palette.secondary.main }}>celebration</span>
							</Typography>
							<Button variant='outlined' className={classes.learnButtonHero}>
								Learn More
							</Button>
						</Grid>
						<Grid item>
							<img className={classes.icon} alt='custom software icon' src={customSoftwareIcon} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item> {/*-----iOS/Android Block------*/}
					<Grid container className={classes.serviceContainer} justifyContent={matchesSM ? 'center' : 'flex-end'}>
						<Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
							<Typography variant='h4'>
								iOS/Android App Development
							</Typography>
							<Typography variant='subtitle1' style={{ marginBottom: '1rem' }}>
								Extend Functionality. Extend Access. Increase Engagement.
							</Typography>
							<Typography variant='subtitle1'>
								Integrate your web experience or create a standalone
							</Typography>
							<Button variant='outlined' className={classes.learnButtonHero}>
								Learn More
							</Button>
						</Grid>
						<Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
							<img className={classes.icon} alt='mobile phone icon' src={mobileAppsIcon} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item> {/*-----Websites Block------*/}
					<Grid container className={classes.serviceContainer} justifyContent={matchesSM ? 'center' : undefined}>
						<Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
							<Typography variant='h4'>
								Website Development
							</Typography>
							<Typography variant='subtitle1' style={{ marginBottom: '1rem' }}>
								Reach More. Discover More. Sell More.
							</Typography>
							<Typography variant='subtitle2'>
								Optimized for Search, built for speed
							</Typography>
							<Button variant='outlined' className={classes.learnButtonHero}>
								Learn More
							</Button>
						</Grid>
						<Grid item>
							<img className={classes.icon} alt='custom software icon' src={websitesIcon} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Grid container style={{ height: '100em', marginTop: '12em' }} alignItems='center' justifyContent='center'>
						<Card className={classes.revolutionCard}>
							<CardContent>
								<Grid container direction='column' alignItems='center'>
									<Grid item>
										<Typography variant='h3' gutterBottom> The Revolution</Typography>
									</Grid>
									<Grid item>
										<Typography variant='subtitle1' style={{ textAlign: 'center' }}>
											Visonary ingishts coupled with cutting-edge technology is a recipe for revolution
										</Typography>
									</Grid>
									<Button variant='outlined' className={classes.learnButtonHero}>
										Learn More
									</Button>
								</Grid>
							</CardContent>
						</Card>
						<div className={classes.revolutionBackground} />
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default LandingPage