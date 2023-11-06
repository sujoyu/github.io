export const sleep = (milliseconds: number) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds));

export const waitNextFrame = (): Promise<number> =>
	new Promise((resolve) => requestAnimationFrame(resolve));
