import * as React from 'react'
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

/**
 * Simple dark/light mode theme switcher button for the app.
 * @param props
 * @constructor
 */
export const ThemeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
	const {toggleColorMode} = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			position={'absolute'}
			right={0}
			size="md"
			fontSize="lg"
			variant="ghost"
			color="current"
			marginLeft="2"
			onClick={toggleColorMode}
			icon={<SwitchIcon/>}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
	)
}