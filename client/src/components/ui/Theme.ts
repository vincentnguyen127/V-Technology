
import { Direction, Transitions, createMuiTheme } from "@material-ui/core/styles";
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
export default createMuiTheme({
	palette: {
		common: { 
			// blue: `${arcBlue}`,
			// orange: `${arcOrange}`
		},
		primary: {
			main: `${arcBlue}`,
		},
		secondary: {
			main: `${arcOrange}`,
		}	
	},
	typography: {
		h3: {
			fontWeight: 300
		}
	}
});