import React from 'react';
import { SimHistoryRunDetails } from '../../../types/SimHistoryRunDetails';
import { WarningBadge } from '../../components/WarningBadge';
import { NegativeBadge } from '../../components/NegativeBadge';

export const renderSimRunDuration = (runDetails: SimHistoryRunDetails) => (
	runDetails.duration < 200
		? runDetails.duration
		: runDetails.duration < 400
		? (
			<WarningBadge>
				{ runDetails.duration }
			</WarningBadge>
		)
		: (
			<NegativeBadge>
				{ runDetails.duration }
			</NegativeBadge>
		)
);
