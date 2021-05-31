import { Image } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';

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
	<ImageWithMask
		width={width ?? 'auto'}
		height={'full'}
		src={url}
		fit="cover"
	/>
);

const ImageWithMask = styled(Image)`
	mask-image: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 1) 5%,
		rgba(0, 0, 0, 1) 95%,
		rgba(0, 0, 0, 0) 100%
	);
`
