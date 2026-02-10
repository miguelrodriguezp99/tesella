import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import "./seo-wrapper.css";

interface SeoWrapperProps {
	children: ReactNode;
}

export const SeoWrapper: FC<SeoWrapperProps> = ({ children }) => {
	const { t } = useTranslation();

	return (
		<main className="seo-wrapper">
			<h1 className="seo-main-heading">{t("seo.h1")}</h1>

			<section aria-labelledby="tool-description">
				<h2 id="tool-description" className="seo-section-heading">
					{t("seo.h2")}
				</h2>
				<p className="seo-description">{t("seo.description")}</p>
			</section>

			<div className="seo-app-container">{children}</div>

			<footer className="seo-footer">
				<section aria-labelledby="features-section">
					<h2 id="features-section" className="seo-section-heading">
						{t("seo.features")}
					</h2>
					<ul className="seo-features-list">
						<li>
							<strong>{t("seo.feature1title")}</strong> -{" "}
							{t("seo.feature1desc")}
						</li>
						<li>
							<strong>{t("seo.feature2title")}</strong> -{" "}
							{t("seo.feature2desc")}
						</li>
						<li>
							<strong>{t("seo.feature3title")}</strong> -{" "}
							{t("seo.feature3desc")}
						</li>
						<li>
							<strong>{t("seo.feature4title")}</strong> -{" "}
							{t("seo.feature4desc")}
						</li>
						<li>
							<strong>{t("seo.feature5title")}</strong> -{" "}
							{t("seo.feature5desc")}
						</li>
					</ul>
				</section>
			</footer>
		</main>
	);
};
