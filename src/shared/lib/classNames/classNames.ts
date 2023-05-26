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
			.filter(([key, value]) => Boolean(value))
			.map(([key, value]) => key),
	].join(' ');
}
