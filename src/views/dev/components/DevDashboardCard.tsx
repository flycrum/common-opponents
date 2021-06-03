import React from 'react';
import {
	Box,
	Button,
	Heading, VStack,
} from '@chakra-ui/react';

export const DevDashboardCard: React.FC<{
	heading: React.ReactNode,
	onClick: () => void,
}> = ({
	children,
	heading,
	onClick
}) => {
	return (
		<Box
			overflow="hidden"
			height="300px"
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
		>
			<Button
				variant="ghost"
				justifyContent={'flex-start'}
				alignItems={'flex-start'}
				height={'full'}
				width={'full'}
				textAlign={'left'}
				onClick={onClick}
			>
				<VStack
					height={'full'}
					width={'full'}
					alignItems={'flex-start'}
				>
					<Heading
						as="u"
						my={3}
						size={'sm'}
						textAlign={'left'}
					>
						{ heading }
					</Heading>
					{ children }
				</VStack>
			</Button>
		</Box>
	);
}
