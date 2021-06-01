import React from 'react';
import { Badge } from '@chakra-ui/react';

export const WarningBadge: React.FC = ({ children }) => (
	<Badge
		p={1}
		variant="outline"
		colorScheme="orange"
	>
		{ children }
	</Badge>
)
