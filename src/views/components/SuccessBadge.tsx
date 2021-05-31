import React from 'react';
import { Badge } from '@chakra-ui/react';

export const SuccessBadge: React.FC = ({ children }) => (
	<Badge
		p={1}
		variant="outline"
		colorScheme="green"
	>
		{ children }
	</Badge>
)
