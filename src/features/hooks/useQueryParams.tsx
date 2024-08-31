import { useLocation } from "react-router-dom";

/**
 * Custom hook to get query parameters from the URL.
 * @returns An object where the keys are the query parameter names and the values are the query parameter values.
 */
const useQueryParams = () => {
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const queryParams: Record<string, string> = {};

	params.forEach((value, key) => {
		queryParams[key] = value;
	});

	return queryParams;
};

export default useQueryParams;
