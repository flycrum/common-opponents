import React from 'react';
import {
	Button,
	ButtonGroup,
	Heading,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { AiOutlineDotChart, AiOutlineLineChart } from 'react-icons/all';
import { DevBulkRunsButton } from '../components/DevBulkRunsButton';
import { FaRegTrashAlt } from 'react-icons/fa';

interface Props {
	dispatchClearSimHistory: () => void;
	isShowingChartLine: boolean;
	toggleChartType: (tf?: boolean) => void;
}

export const DevSimChartHeader: React.FC<Props> = ({
	dispatchClearSimHistory,
	isShowingChartLine,
	toggleChartType,
}) => {
	return (
		<HStack
			justifyContent={'space-between'}
			alignItems={'flex-start'}
		>
			<VStack
				ml={12}
				alignItems={'flex-start'}
			>
				<Heading
					fontSize={'sm'}
					fontWeight={'normal'}
				>
					{isShowingChartLine
						? 'Performance over history of runs (spikes tend to be 👿)'
						: 'Duration vs results length (big bubbles near bottom is 👿)'
					}
				</Heading>
				<Text
					fontSize={'xs'}
					color="gray.500"
				>
					{isShowingChartLine
						? 'Y: Duration of sims, X: Series of run'
						: 'Y: Run results length, X: Series of runs, Bubble Size: duration'
					}
				</Text>
			</VStack>
			<ButtonGroup>
				<Button
					size={'xs'}
					variant="outline"
					leftIcon={isShowingChartLine ? <AiOutlineDotChart /> : <AiOutlineLineChart />}
					colorScheme="blue"
					onClick={() => toggleChartType()}
				>
					{isShowingChartLine
						? 'Switch to Scatter Chart'
						: 'Switch to Line Chart'
					}
				</Button>
				<DevBulkRunsButton />
				<Button
					size={'xs'}
					variant="outline"
					leftIcon={<FaRegTrashAlt />}
					colorScheme="red"
					onClick={dispatchClearSimHistory}
				>
					Clear Runs
				</Button>
			</ButtonGroup>
		</HStack>
	)
}
