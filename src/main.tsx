import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";
import { GridConfigProvider } from "./providers/grid-provider";

document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={null}>
			<GridConfigProvider
				initialCols={6}
				initialRowHeight={75}
				initialGap={10}
				initialRows={6}
			>
				<App />
			</GridConfigProvider>
		</Suspense>
	</StrictMode>,
);
