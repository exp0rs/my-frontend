/* eslint-disable @typescript-eslint/no-unused-vars */
type Mods = Record<string, boolean | string>;
export function classNames(
	cls: string,
	additional: string[] = [],
	mods: Mods = {}
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([key, _]) => key),
	].join(' ');
}
