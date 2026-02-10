import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@/i18n";
import "./language-selector.css";

export const LanguageSelector = () => {
	const { i18n } = useTranslation();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const currentLang =
		languages.find((l) => l.code === i18n.language?.split("-")[0]) ??
		languages[0];

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, []);

	return (
		<div className="language-selector" ref={ref}>
			<button
				type="button"
				className="language-selector__toggle"
				onClick={() => setOpen(!open)}
				aria-label="Select language"
			>
				<span className="language-selector__flag">{currentLang.flag}</span>
				<span className="language-selector__code">
					{currentLang.code.toUpperCase()}
				</span>
			</button>
			{open && (
				<ul className="language-selector__dropdown">
					{languages.map((lang) => (
						<li key={lang.code}>
							<button
								type="button"
								className={`language-selector__option ${lang.code === currentLang.code ? "active" : ""}`}
								onClick={() => {
									i18n.changeLanguage(lang.code);
									setOpen(false);
								}}
							>
								<span>{lang.flag}</span>
								<span>{lang.name}</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
