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
import { DevModalTabPanelApis } from './DevModalTabPanelApis';
import { DevModalTabSimCard } from './DevModalTabSimCard';
import { DevModalTabPanelSim } from './DevModalTabPanelSim';
import { DevModalTabApisTeamsCard } from './DevModalTabPanelApisTeamsCard';
import { DevModalTabApisGamesCard } from './DevModalTabPanelApisGamesCard';

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
			scrollBehavior={'inside'}
		>
			<ModalOverlay />
			<ModalContent my={0}>
				<ModalCloseButton
					position={'absolute'}
					zIndex={1} // show above rest of modal content
				/>
				<ModalHeader
					paddingStart={4}
					fontSize={'2xl'}
				>
					Dev Tools
				</ModalHeader>
				<ModalBody
					display={'flex'}
					p={0}
					overflow={'hidden'}
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
								<DevModalTabPanelApis.Tab />
							</Tab>
							<Tab onClick={() => setSelectedTab(2)}>
								<DevModalTabPanelSim.Tab />
							</Tab>
						</TabList>
						<TabPanels flex="1 1 auto" overflow={'auto'}>
							<TabPanel height={'full'}>
								<SimpleGrid
									columns={[0, 1, 2, 3, 4]}
									spacing={4}
								>
									<DevModalTabApisTeamsCard onClick={() => setSelectedTab(1)} />
									<DevModalTabApisGamesCard onClick={() => setSelectedTab(1)} />
									<DevModalTabSimCard onClick={() => setSelectedTab(2)} />
								</SimpleGrid>
							</TabPanel>
							<TabPanel height={'full'}>
								<DevModalTabPanelApis />
							</TabPanel>
							<TabPanel height={'full'}>
								<DevModalTabPanelSim />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
