import React, {FC} from 'react';
import { AppBar, Toolbar, useScrollTrigger  } from '@material-ui/core';
import {Typography} from '@material-ui/core';

interface HeaderProps {

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
  

const Header : FC<HeaderProps> = ({

}) => {
	return (
		<>
		<ElevationScroll>
		<AppBar color='secondary'>
			<Toolbar>
				<Typography variant='h3'>
					Header
				</Typography>
			</Toolbar>
		</AppBar>	
		</ElevationScroll>
		</>
	)
}
export default Header