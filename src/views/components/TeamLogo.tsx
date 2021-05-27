import { Image } from '@chakra-ui/react';
import React from 'react';

interface Props {
	url: string;
	width?: number;
}

/**
 * The team logo image.
 * @param url path to the image
 * @param width desired width of the image
 */
export const TeamLogo = ({
	url,
	width,
}: Props) => (
	<Image
		width={width ?? 'auto'}
		height={'full'}
		src={url}
		fit="cover"
	/>
);
