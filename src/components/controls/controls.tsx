import { useGridConfig } from "@/providers/grid-provider";
import { useTranslation } from "react-i18next";
import "./controls.css";
import Button from "../button/button";
import { Plus } from "@/icons/plus";
import { Minus } from "@/icons/minus";

export const Controls = () => {
	const { t } = useTranslation();
	const {
		state: { cols, rows, rowHeight, gap },
		actions: {
			incrementCols,
			decrementCols,
			incrementRows,
			decrementRows,
			incrementRowHeight,
			decrementRowHeight,
			incrementGap,
			decrementGap,
			setGap,
			setCols,
			setRows,
			setRowHeight,
		},
	} = useGridConfig();

	return (
		<div className="grid-controls">
			<div className="grid-controls__control">
				<span className="grid-controls__label">{t("controls.columns")}</span>
				<div className="grid-controls__buttons">
					<Button
						className="button-top"
						onClick={incrementCols}
						disabled={cols >= 12}
					>
						<Plus />
					</Button>
					<div className="input-container">
						<input
							onChange={(e) => {
								const value = parseInt(e.target.value, 10);
								if (!isNaN(value)) {
									setCols(value);
								}
							}}
							value={cols}
							className="input-content"
						/>
					</div>
					<Button
						className="button-bottom"
						onClick={decrementCols}
						disabled={cols <= 1}
					>
						<Minus />
					</Button>
				</div>
			</div>

			<div className="grid-controls__control">
				<span className="grid-controls__label">{t("controls.rows")}</span>
				<div className="grid-controls__buttons">
					<Button
						className="button-top"
						onClick={incrementRows}
						disabled={rows >= 12}
					>
						<Plus />
					</Button>
					<div className="input-container">
						<input
							onChange={(e) => {
								const value = parseInt(e.target.value, 10);
								if (!isNaN(value)) {
									setRows(value);
								}
							}}
							value={rows}
							className="input-content"
						/>
					</div>
					<Button
						className="button-bottom"
						onClick={decrementRows}
						disabled={rows <= 1}
					>
						<Minus />
					</Button>
				</div>
			</div>

			<div className="grid-controls__control">
				<span className="grid-controls__label">{t("controls.height")}</span>
				<div className="grid-controls__buttons">
					<Button className="button-top" onClick={incrementRowHeight}>
						<Plus />
					</Button>
					<div className="input-container">
						<input
							onChange={(e) => {
								const value = parseInt(e.target.value, 10);
								if (!isNaN(value)) {
									setRowHeight(value);
								}
							}}
							value={rowHeight}
							className="input-content"
						/>
					</div>
					<Button
						className="button-bottom"
						onClick={decrementRowHeight}
						disabled={rowHeight <= 1}
					>
						<Minus />
					</Button>
				</div>
			</div>

			<div className="grid-controls__control">
				<span className="grid-controls__label">{t("controls.gap")}</span>
				<div className="grid-controls__buttons">
					<Button
						className="button-top"
						onClick={incrementGap}
						disabled={gap >= 30}
					>
						<Plus />
					</Button>
					<div className="input-container">
						<input
							onChange={(e) => {
								const value = parseInt(e.target.value, 10);
								if (!isNaN(value)) {
									setGap(value);
								}
							}}
							value={gap}
							className="input-content"
						/>
					</div>
					<Button
						className="button-bottom"
						onClick={decrementGap}
						disabled={gap <= 0}
					>
						<Minus />
					</Button>
				</div>
			</div>
		</div>
	);
};
