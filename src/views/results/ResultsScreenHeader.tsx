import React from 'react';
import {
	Box,
	Heading,
	HStack,
	IconButton,
} from '@chakra-ui/react';
import { FaChevronLeft } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';

export const ResultsScreenHeader = () => {
	const location = useLocation();
	const history = useHistory();

	return (
		<HStack
			alignItems={'center'}
			justifyContent={'space-between'}
			width={'full'}
			p={2}
			borderBottom="1px"
			borderColor="gray.200"
		>
			<IconButton
				aria-label="Go Back"
				size="lg"
				icon={<FaChevronLeft />}
				variant={'ghost'}
				onClick={() => {
					if (location.state) {
						history.goBack();
					} else {
						history.push('/');
					}
				}}
			/>
			<Heading as="h1">
				Results
			</Heading>
			<Box width={'48px'} />
		</HStack>
	);
}
