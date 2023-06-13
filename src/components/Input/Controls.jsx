import { useGlobalContext } from "../../GlobalContext";


const Controls = () => {

	const { isCaseSensitive, setIsCaseSensitive, inputValue, setInputValue, outputValue, setOutputValue, setShowAlert, handleAlert } = useGlobalContext()

	const handlePaste = async () => {
		try {
			const pasteText = await navigator.clipboard.readText();
			setInputValue((prev) => prev + pasteText);
			document.querySelector("#input-text").focus();
			handleAlert("success", "Pasted to Textbox")
		} catch (err) {
			console.error(err);
			handleAlert("error", "Failed to Paste")
		}
	};

	const handleCopy = () => {
		if (inputValue !== "") {
			try {
				navigator.clipboard.writeText(outputValue);
				handleAlert("success", "Copied to Clipboard")
			} catch (error) {
				console.error(error);
				handleAlert("error", "Failed to Copy")
			}
		}
		else {
			handleAlert("warning", "Textbox is empty")
		}
		setShowAlert(true)
	}

	return (
		<div className="control">
			<div className="left">
				<span className="case-sensitive">
					<label>
						<input
							defaultChecked={isCaseSensitive}
							type="checkbox"
							name="name"
							onClick={() => {
								setIsCaseSensitive((prev) => {
									return !prev;
								})
								document.querySelector("#input-text").focus();
								const alertMsg = isCaseSensitive ? "Case Sensitive Disabled" : "Case Sensitive Enabled";
								handleAlert("success", alertMsg)
							}
							}
						/>
						<span>Case Sensitive</span>
					</label>
				</span>
				<button
					type="button"
					onClick={handlePaste}
				>
					<span>Paste</span>
					<i className="bx bx-paste"></i>
				</button>
				<button
					className="clear"
					type="button"
					onClick={() => {
						setInputValue("")
						setOutputValue("")
						handleAlert("success", "Textbox Cleared")
					}}
				>
					<span>Clear</span>
					<i className="bx bx-trash"></i>
				</button>
			</div>
			<div className="right">
				<button
					type="button"
					onClick={() => {
						if (inputValue !== "") {
							handleCopy()
							setInputValue("")
							setOutputValue("")
							handleAlert("success", "Textbox Cleared and Copied")
						}
						else {
							handleAlert("warning", "Textbox is empty")
						}
					}}
				>
					<span>Cut</span>
					<i className="bx bx-cut"></i>
				</button>
				<button
					className="copy"
					type="button"
					onClick={handleCopy}
				>
					<span>Copy</span>
					<i className="bx bx-copy-alt"></i>
				</button>
			</div>
		</div>
	)
}
export default Controls