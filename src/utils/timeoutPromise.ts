export function delay(ms: number = 0) {
	return new Promise( resolve => setTimeout(resolve, ms) );
}

export const sleep = delay;
export const timeout = delay;
