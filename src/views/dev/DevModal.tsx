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
import { DevApisPanel, DevModalTabPanelApisTab } from './apis/DevApisPanel';
import { DevSimDashboardCard } from './sim/DevSimDashboardCard';
import { DevSimPanel, DevModalTabPanelSimTab } from './sim/DevSimPanel';
import { DevModalTabApisTeamsCard } from './apis/DevApisTeamsDashboardCard';
import { DevModalTabApisGamesCard } from './apis/DevApisGamesDashboardCard';

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
								<DevModalTabPanelApisTab />
							</Tab>
							<Tab onClick={() => setSelectedTab(2)}>
								<DevModalTabPanelSimTab />
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
									<DevSimDashboardCard
										onClick={() => setSelectedTab(2)}
										onCloseModal={onClose}
									/>
								</SimpleGrid>
							</TabPanel>
							<TabPanel height={'full'}>
								<DevApisPanel />
							</TabPanel>
							<TabPanel height={'full'}>
								<DevSimPanel onCloseModal={onClose} />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
