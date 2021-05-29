import * as H from 'history';

/**
 * Location state shape for route location changes.
 * Initial purpose is to be used for modals.
 */
export interface LocationState<X = any> {
	modalBackLocation?: H.Location;
	xtra?: X;
}
