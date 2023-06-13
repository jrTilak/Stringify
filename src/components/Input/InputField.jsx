import { useEffect } from "react";
import { useGlobalContext } from "../../GlobalContext";

const InputField = () => {
  const {
    showServiceContent,
    inputValue,
    setInputValue,
    outputValue,
    setInfoCount
  } = useGlobalContext()

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(e.target.value);
    setInfoCount(inputValue)
  }
  useEffect(() => {
    setInfoCount(inputValue)
  }, [inputValue, setInfoCount])

  let myStyle = showServiceContent ? { width: "40vw" } : { width: "80vw" }
  return (
    <div className="textarea">
      <textarea
        style={myStyle}
        name="text"
        id="input-text"
        autoComplete="off"
        autoFocus
        cols={showServiceContent ? "54" : "108"}
        rows="7"
        placeholder="Enter your text here........"
        spellCheck="false"
        value={inputValue}
        onChange={handleInputChange}
      />
      {showServiceContent &&
        <textarea
          name="text"
          id="output-text"
          autoComplete="off"
          value={outputValue}
          cols="54"
          rows="7"
          placeholder="Output comes here..."
          readOnly
        />}
    </div>
  )
}

export default InputField
