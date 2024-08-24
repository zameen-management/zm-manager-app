import { useEffect, useRef } from "react";

type Props = {
	onOutsideClick: () => void;
};

const useOutsideClick = <T extends HTMLElement>({ onOutsideClick }: Props) => {
	const ref = useRef<T>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onOutsideClick();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onOutsideClick]);

	return ref;
};

export default useOutsideClick;
