import React from 'react';
import { Badge } from '@chakra-ui/react';

export const NegativeBadge: React.FC = ({ children }) => (
	<Badge
		p={1}
		variant="outline"
		colorScheme={'red'}
		color={'red.500'}
		shadow={'inset 0 0 0px 1px rgb(255 0 0 / 80%)'}
	>
		{ children }
	</Badge>
)
