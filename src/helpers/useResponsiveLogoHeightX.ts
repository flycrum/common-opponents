import { useBreakpointValue } from '@chakra-ui/react';

/**
 * A convenience hook that returns the logo height multiplier that changes at different responsive breakpoints.
 */
export function useResponsiveLogoHeightX () {
	return useBreakpointValue(
		{
			base: 0.5,
			sm: 3,
		}
	) ?? 3;
}
