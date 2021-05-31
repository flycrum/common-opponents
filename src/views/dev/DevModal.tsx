import React, { useState } from 'react';
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	SimpleGrid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';
import {
	DevModalTabApis,
	DevModalTabApisGamesCard,
	DevModalTabApisTeamsCard,
} from './DevModalTabApis';

/**
 * The virtualized list to display and allow for the selection of a team.
 */
export const DevModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	const [selectedTab, setSelectedTab] = useState(0);

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
				<ModalHeader paddingStart={4}>
					Dev Tools
				</ModalHeader>
				<ModalBody
					display={'flex'}
					p={0}
				>
					<Tabs
						display={'flex'}
						flexDirection={'column'}
						flex="1 1 auto"
						index={selectedTab}
					>
						<TabList>
							<Tab onClick={() => setSelectedTab(0)}>
								Dashboard
							</Tab>
							<Tab onClick={() => setSelectedTab(1)}>
								<DevModalTabApis.Tab />
							</Tab>
						</TabList>
						<TabPanels flex="1 1 auto">
							<TabPanel>
								<SimpleGrid
									columns={[0, 1, 2, 3, 4]}
									spacing={4}
								>
									<DevModalTabApisTeamsCard onClick={() => setSelectedTab(1)} />
									<DevModalTabApisGamesCard onClick={() => setSelectedTab(1)} />
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<DevModalTabApis />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
