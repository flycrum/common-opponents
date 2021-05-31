import * as React from 'react';
import {
	IconButton,
} from '@chakra-ui/react';
import { FaDev } from 'react-icons/fa';

/**
 * Button to show the dev tools modal.
 * @param props
 */
export const DevButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<IconButton
			size="lg"
			fontSize="lg"
			variant="ghost"
			color="current"
			onClick={onClick}
			icon={<FaDev />}
			aria-label={`Show dev modal`}
			style={{ margin: 0 }}
		/>
	);
}
