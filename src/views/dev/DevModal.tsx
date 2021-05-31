import React from 'react';
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react';

/**
 * The virtualized list to display and allow for the selection of a team.
 */
export const DevModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	return (
		<Modal
			onClose={onClose}
			size={'full'}
			isOpen={true}
			isCentered
			motionPreset={'none'}
		>
			<ModalOverlay />
			<ModalContent my={0}>
				<ModalCloseButton
					position={'absolute'}
					zIndex={1} // show above rest of modal content
				/>
				<ModalBody p={0}>
					body
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
