import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { Button } from '@chakra-ui/react';
import { FaMagic } from 'react-icons/fa';
import { sagaActions } from '../../../store/saga/saga';
import { delay } from '../../../utils/timeoutPromise';
import { setSimBulkMode } from '../../../store/slices/simSlice';

export const DevBulkRunsButton: React.FC = () => {
	const dispatch = useAppDispatch();
	const { isRunningBulk } = useAppSelector((state) => state.sim);

	const onClickGenerateRuns = async () => {
		dispatch(setSimBulkMode(true));

		for (let i = 0 ; i < 100 ; i++) {
			if (i !== 0) {
				await delay(200);
			}

			dispatch({ type: sagaActions.RANDOM_SELECT_TEAMS });
			dispatch({ type: sagaActions.FIND_COMMON_OPPONENTS });
		}

		dispatch(setSimBulkMode(false));
	};

	return (
		<Button
			size={'xs'}
			variant="outline"
			isLoading={isRunningBulk}
			leftIcon={isRunningBulk ? undefined : <FaMagic />}
			colorScheme="black"
			onClick={() => onClickGenerateRuns()}
		>
			Generate 100 Runs
		</Button>
	);
}

