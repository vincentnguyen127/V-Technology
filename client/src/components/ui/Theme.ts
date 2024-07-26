
import { Direction, Transitions, createMuiTheme, createTheme } from "@material-ui/core/styles";
import { Breakpoints } from "@material-ui/core/styles/createBreakpoints";
import { Mixins } from "@material-ui/core/styles/createMixins";
import { Palette } from "@material-ui/core/styles/createPalette";
import { Spacing } from "@material-ui/core/styles/createSpacing";
import { Typography } from "@material-ui/core/styles/createTypography";
import { Overrides } from "@material-ui/core/styles/overrides";
import { ComponentsProps } from "@material-ui/core/styles/props";
import { Shadows } from "@material-ui/core/styles/shadows";
import { Shape } from "@material-ui/core/styles/shape";
import { ZIndex } from "@material-ui/core/styles/zIndex";

declare module '@material-ui/core/styles/createTypography' {
	  interface TypographyOptions {
		tab: {
		  fontFamily: string;
		  textTransform: string;
		  fontWeight: number;
		  fontSize: string;
		},
		estimate: {
			fontFamily: string;
			fontSize: string;
			textTransform: string;
			color: string;
		}
	  }
}

export interface Theme {
	shape: Shape;
	breakpoints: Breakpoints;
	direction: Direction;
	mixins: Mixins;
	overrides?: Overrides;
	palette: Palette;
	props?: ComponentsProps;
	shadows: Shadows;
	spacing: Spacing;
	transitions: Transitions;
	typography: Typography;
	zIndex: ZIndex;
	unstable_strictMode?: boolean;
  }

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

const theme  = createTheme({ 
	palette: {
		// common: { 
		// 	blue: `${arcBlue}`,
		// 	// orange: `${arcOrange}`
		// },
		primary: {
			main: arcBlue,
		},
		secondary: {
			main: arcOrange,
		}	
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1rem'
		},
		estimate : {
			fontFamily: 'Pacifio',
			fontSize: '1rem',
			textTransform: 'none',
			color: 'white'
		},
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: `${arcBlue}`,
			lineHeight: 1.5
		}
	}
});

export default theme;