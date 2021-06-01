import React from 'react';
import {
	Box,
	Button,
	Heading,
} from '@chakra-ui/react';

export const DevModalTabCard: React.FC<{
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
				<Box
					display={'flex'}
					flexDirection={'column'}
					height={'full'}
					width={'full'}
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
				</Box>
			</Button>
		</Box>
	);
}
