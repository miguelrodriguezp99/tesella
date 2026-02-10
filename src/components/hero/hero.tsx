import { useTranslation } from "react-i18next";
import "./hero.css";

export const Hero = () => {
	const { t } = useTranslation();

	return (
		<section className="hero-section">
			<p className="title">Tesella</p>
			<span className="subtitle">{t("subtitle")}</span>
			<div className="sphere sphere-1 main-radial-gradient"></div>
		</section>
	);
};
