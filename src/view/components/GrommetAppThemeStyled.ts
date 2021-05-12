import { ThemeType } from 'grommet/themes/base';
import styled from 'styled-components';
import { Grommet } from 'grommet';

export const grommetTheme: ThemeType = {
	global: {
		font: {

		},
	},
};

export const GrommetStyled = styled(Grommet)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;
