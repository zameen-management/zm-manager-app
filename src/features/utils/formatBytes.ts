/**
 * Converts a number of bytes into a human-readable string with appropriate units.
 *
 * @param bytes - The number of bytes.
 * @param decimals - The number of decimal places to include in the result (default is 2).
 * @returns A string representing the bytes in a human-readable format.
 */
export const formatBytes = (bytes: number, decimals: number = 2): string => {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));
	const sizeIndex = i < sizes.length ? i : sizes.length - 1;
	const size = bytes / Math.pow(k, sizeIndex);

	return `${size.toFixed(dm)} ${sizes[sizeIndex]}`;
};
