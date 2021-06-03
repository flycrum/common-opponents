import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Box,
	Button,
	Text
} from '@chakra-ui/react';
import { renderSimRunDuration } from '../utils/renderSimRunDuration';
import React from 'react';
import { SimHistoryRunDetails } from '../../../types/SimHistoryRunDetails';

interface Props {
	alertCancelRef: React.MutableRefObject<HTMLButtonElement | null>;
	alertDetails: null | SimHistoryRunDetails;
	onClickAlert: () => void;
	onCloseAlert: () => void;
}

export const DevSimChartRerunAlertDialog: React.FC<Props> = ({
	alertCancelRef,
	alertDetails,
	onClickAlert,
	onCloseAlert,
}) => {
	return (
		<AlertDialog
			isOpen={!!alertDetails}
			leastDestructiveRef={alertCancelRef}
			onClose={onCloseAlert}
		>
			{alertDetails && (
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader
							fontSize="lg"
							fontWeight="bold"
						>
							{ alertDetails?.team1.team.nickname }
							{ ' vs ' }
							{ alertDetails?.team2.team.nickname }
						</AlertDialogHeader>
						<AlertDialogBody>
							<Box>
								Original run:
								{ ' ' }
								{ alertDetails?.length }
								{ ' ' }
								results in
								{ ' ' }
								{ renderSimRunDuration(alertDetails) }
								{ ' ' }
								ms
							</Box>
							<Text mt={4}>
								Would you like to run this sim again and show their common opponents result?
							</Text>
						</AlertDialogBody>
						<AlertDialogFooter>
							<Button
								ref={alertCancelRef}
								onClick={onCloseAlert}
							>
								Cancel
							</Button>
							<Button
								colorScheme="blue"
								onClick={onClickAlert}
								ml={3}
							>
								Yes, Run Again!
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			)}
		</AlertDialog>
	);
}
