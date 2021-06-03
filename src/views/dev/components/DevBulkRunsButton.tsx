import React, { useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { Button } from '@chakra-ui/react';
import { FaMagic } from 'react-icons/fa';
import { sagaActions } from '../../../store/saga/saga';
import { delay } from '../../../utils/timeoutPromise';
import { useMountedState } from 'react-use';

export const DevBulkRunsButton: React.FC = () => {
	const dispatch = useAppDispatch();
	const isMounted = useMountedState();
	const [ isGeneratingRuns, setIsGeneratingRuns ] = useState(false);

	const onClickGenerateRuns = async () => {
		setIsGeneratingRuns(true);

		for (let i = 0 ; i < 100 ; i++) {
			if (i !== 0) {
				await delay(200);
			}

			dispatch({ type: sagaActions.RANDOM_SELECT_TEAMS });
			dispatch({ type: sagaActions.FIND_COMMON_OPPONENTS });
		}

		// check if mounted to avoid `Warning: Can't perform a React state update on an unmounted component`
		if (isMounted()) {
			setIsGeneratingRuns(false);
		}
	};

	return (
		<Button
			size={'xs'}
			variant="outline"
			isLoading={isGeneratingRuns}
			leftIcon={isGeneratingRuns ? undefined : <FaMagic />}
			colorScheme="black"
			onClick={() => onClickGenerateRuns()}
		>
			Generate 100 Runs
		</Button>
	);
}

