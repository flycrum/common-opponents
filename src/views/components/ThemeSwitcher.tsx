import * as React from 'react';
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

/**
 * Simple dark/light mode theme switcher button for the app.
 * @param props
 */
export const ThemeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			size="lg"
			fontSize="lg"
			variant="ghost"
			color="current"
			onClick={toggleColorMode}
			icon={<SwitchIcon/>}
			aria-label={`Switch to ${text} mode`}
			style={{ margin: 0 }}
			{...props}
		/>
	);
}
