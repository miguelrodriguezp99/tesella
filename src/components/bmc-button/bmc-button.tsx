import "./bmc-button.css";

export const BmcButton = () => {
	return (
		<a
			className="bmc-btn"
			href="https://www.buymeacoffee.com/miguelrp99"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span className="bmc-btn__emoji">&#9749;</span>
			<span className="bmc-btn__text">Buy me a coffee</span>
		</a>
	);
};
