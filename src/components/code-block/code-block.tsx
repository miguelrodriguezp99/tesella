import React, { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Copy } from "../../icons/copy";
import "./code-block.css";
import { tesellaTheme } from "./tesella-theme";

interface CodeBlockProps {
	code: string;
	language: "html" | "css" | "jsx" | "tsx" | "typescript" | "javascript";
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
	const [copied, setCopied] = useState(false);
	const { t } = useTranslation();

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			toast.success(t("code.copied"), {
				duration: 2000,
				className: "my-toast",
			});

			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			toast.error(t("code.copyError"));
			console.error("Failed to copy code:", error);
		}
	};

	return (
		<div className="code-block-wrapper">
			<button
				className={`copy-button ${copied ? "copied" : ""}`}
				onClick={handleCopy}
				aria-label={t("code.copyLabel")}
			>
				<Copy />
			</button>
			<Highlight theme={tesellaTheme} code={code} language={language}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={`${className} code-block`} style={style}>
						{tokens.map((line, i) => (
							<div {...getLineProps({ line, key: i })} className="code-line">
								<span className="line-number">{i + 1}</span>
								<span className="line-content">
									{line.map((token, key) => (
										<span {...getTokenProps({ token, key })} />
									))}
								</span>
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</div>
	);
};
