import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import it from "./locales/it.json";
import pt from "./locales/pt.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import zh from "./locales/zh.json";
import ru from "./locales/ru.json";
import ar from "./locales/ar.json";
import hi from "./locales/hi.json";
import nl from "./locales/nl.json";
import pl from "./locales/pl.json";
import tr from "./locales/tr.json";

export const languages = [
	{ code: "en", name: "English", flag: "🇬🇧" },
	{ code: "es", name: "Español", flag: "🇪🇸" },
	{ code: "fr", name: "Français", flag: "🇫🇷" },
	{ code: "de", name: "Deutsch", flag: "🇩🇪" },
	{ code: "it", name: "Italiano", flag: "🇮🇹" },
	{ code: "pt", name: "Português", flag: "🇧🇷" },
	{ code: "ja", name: "日本語", flag: "🇯🇵" },
	{ code: "ko", name: "한국어", flag: "🇰🇷" },
	{ code: "zh", name: "中文", flag: "🇨🇳" },
	{ code: "ru", name: "Русский", flag: "🇷🇺" },
	{ code: "ar", name: "العربية", flag: "🇸🇦" },
	{ code: "hi", name: "हिन्दी", flag: "🇮🇳" },
	{ code: "nl", name: "Nederlands", flag: "🇳🇱" },
	{ code: "pl", name: "Polski", flag: "🇵🇱" },
	{ code: "tr", name: "Türkçe", flag: "🇹🇷" },
] as const;

// Check for ?lang= query param (used by hreflang URLs)
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get("lang");

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			es: { translation: es },
			fr: { translation: fr },
			de: { translation: de },
			it: { translation: it },
			pt: { translation: pt },
			ja: { translation: ja },
			ko: { translation: ko },
			zh: { translation: zh },
			ru: { translation: ru },
			ar: { translation: ar },
			hi: { translation: hi },
			nl: { translation: nl },
			pl: { translation: pl },
			tr: { translation: tr },
		},
		lng: langParam || "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ["querystring", "localStorage", "navigator", "htmlTag"],
			lookupQuerystring: "lang",
			caches: ["localStorage"],
		},
	});

// Update <html lang=""> on language change
i18n.on("languageChanged", (lng) => {
	document.documentElement.setAttribute("lang", lng);
	document.documentElement.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
});

// Set initial lang attribute
document.documentElement.setAttribute("lang", i18n.language || "en");

export default i18n;
