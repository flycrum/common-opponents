import React from 'react';
import { Badge } from '@chakra-ui/react';

export const NeutralBadge: React.FC = ({ children }) => (
	<Badge
		p={1}
		variant="outline"
	>
		{ children }
	</Badge>
)
