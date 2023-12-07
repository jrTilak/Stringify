import { createContext, useContext, useState } from "react"
import { capitalize, extractSentences, extractUniqueCharacters, extractUniqueLetters, extractUniqueNumbers, extractUniqueWords, extractWords, lowercase, remove, reverseCase, reverseText, uppercase } from "./utils/stringManipulation"
import { charCountNoSpaces, charCountfn } from "./utils/textAnalysis"
import { URLencoder, extractEmailsFromString, extractPhoneNumbersFromString, extractURLsFromString } from "./utils/encoding"
import PropTypes from "prop-types"
const Context = createContext()
export const useGlobalContext = () => useContext(Context)
const GlobalContext = ({ children }) => {
    const [showServiceContent, setShowServiceContent] = useState(false)
    const [categoryTitle, setCategoryTitle] = useState("")
    const [serviceTitle, setServiceTitle] = useState("")
    const [serviceDesc, setServiceDesc] = useState("")
    const [isCaseSensitive, setIsCaseSensitive] = useState(true)
    const [inputValue, setInputValue] = useState("")
    const [outputValue, setOutputValue] = useState("")
    const [charCount, setCharCount] = useState(0)
    const [charNoSpacesCount, setCharNoSpacesCount] = useState(0)
    const [uniqueCharCount, setUniqueCharCount] = useState(0)
    const [wordCount, setWordCount] = useState(0)
    const [uniqueWordCount, setUniqueWordCount] = useState(0)
    const [sentCount, setSentCount] = useState(0)
    const [runBtnText, setRunBtnText] = useState("")
    const [showCharacterType, setShowCharacterType] = useState(false)
    const [characterType, setCharacterType] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("")
    const [alertMessage, setAlertMessage] = useState("")
    const [alertIconType, setAlertIconType] = useState("")
    const [showOutputType, setShowOutputType] = useState(false)
    const [outputType, setOutputType] = useState("string")

    const switchFunction = (id, msg) => {
        handleAlert("success", msg)
        switch (id) {
            case "buttonLowercase":
                setOutputValue(lowercase(inputValue))
                break;
            case "buttonUppercase":
                setOutputValue(uppercase(inputValue))
                break;
            case "buttonCapitalizeFirstLetter":
                setOutputValue(capitalize(inputValue, " "))
                break;
            case "buttonCapitalizeSentences":
                setOutputValue(capitalize(inputValue, "."))
                break;
            case "buttonReverseCase":
                setOutputValue(reverseCase(inputValue))
                break;
            case "buttonReverseText":
                setOutputValue(reverseText(inputValue))
                break;
            case "buttonRemoveWhitespace":
                setOutputValue(remove(inputValue))
                break;
            case "buttonRemoveSpecificCharacters":
                setShowCharacterType(true)
                if (isCaseSensitive) {
                    setOutputValue(remove(inputValue, characterType))
                }
                else {
                    let outputValueNew = remove(inputValue, (characterType.toUpperCase()))
                    outputValueNew = remove(outputValueNew, (characterType.toLowerCase()))
                    setOutputValue(outputValueNew)
                }
                if (characterType === "") {
                    handleAlert("warning", "Please select a character to remove.")
                }
                else {
                    handleAlert("success", `${characterType} removed successfully.`)
                }
                break;
            case "buttonExtractUniqueWords":
                setShowOutputType(true)
                if (isCaseSensitive) {
                    setOutputValue(extractUniqueWords(inputValue, outputType).data)
                } else {
                    setOutputValue(extractUniqueWords(inputValue.toLowerCase(), outputType).data)
                }
                break;
            case "buttonExtractUniqueLetters":
                setShowOutputType(true)
                if (isCaseSensitive) {
                    setOutputValue(extractUniqueLetters(inputValue, outputType))
                } else {
                    setOutputValue(extractUniqueLetters(inputValue.toLowerCase(), outputType))
                }
                
                break;
            case "buttonExtractUniqueNumbers":
                setShowOutputType(true)
                setOutputValue(extractUniqueNumbers(inputValue, outputType))
                break;
            case "buttonUrlEncoding":
                setOutputValue(URLencoder(inputValue))
                break;
            case "buttonUrlExtractor":
                setShowOutputType(true)
                setOutputValue((extractURLsFromString(inputValue, outputType)))
                break;
            case "buttonEmailExtractor":
                setShowOutputType(true)
                setOutputValue((extractEmailsFromString(inputValue, outputType)));
                break;
            case "buttonPhoneNumberExtractor":
                setShowOutputType(true)
                setOutputValue((extractPhoneNumbersFromString(inputValue, outputType)));
                break;
            default:
                break;
        }
    }
    const handleOutputChanges = (e) => {
        const id = e.currentTarget.id;
        setShowCharacterType(false)
        setShowOutputType(false)
        let msg = e.currentTarget.querySelector("h3").innerText
        switchFunction(id, msg);
    }

    const handleAlert = (type, message) => {
        setShowAlert(true)
        setAlertType(type)
        setAlertMessage(message)
    }

    const toggleAlertClasses = (type) => {
        document.querySelector(".progress").classList.add("active");
        let alertComp = document.querySelector(".alert")
        alertComp.classList.add("active");
        alertComp.classList.remove("warning");
        alertComp.classList.remove("error");
        alertComp.classList.remove("success");

        switch (type) {
            case "success":
                alertComp.classList.add("success");
                setAlertIconType("bxs-check-circle")
                break;
            case "warning":
                alertComp.classList.add("warning");
                setAlertIconType("bxs-info-circle")
                break;
            case "danger":
                alertComp.classList.add("error");
                setAlertIconType("bxs-error-circle")
                break;
            default:
                break;
        }
    }

    const setInfoCount = (inputValue) => {
        setCharCount(charCountfn(inputValue))
        setCharNoSpacesCount(charCountNoSpaces(inputValue))
        setUniqueCharCount(extractUniqueCharacters(inputValue).length)
        setWordCount(extractWords(inputValue).length)
        setUniqueWordCount(extractUniqueWords(inputValue).len)
        setSentCount(extractSentences(inputValue).length)
    }

    return (
        <Context.Provider
            value={
                {
                    showServiceContent, setShowServiceContent,
                    categoryTitle, setCategoryTitle,
                    serviceTitle, setServiceTitle,
                    serviceDesc, setServiceDesc,
                    isCaseSensitive, setIsCaseSensitive,
                    inputValue, setInputValue,
                    outputValue, setOutputValue,
                    charCount, setCharCount,
                    charNoSpacesCount, setCharNoSpacesCount,
                    uniqueCharCount, setUniqueCharCount,
                    wordCount, setWordCount,
                    uniqueWordCount, setUniqueWordCount,
                    sentCount, setSentCount,
                    runBtnText, setRunBtnText,
                    showCharacterType, setShowCharacterType,
                    characterType, setCharacterType,
                    showAlert, setShowAlert,
                    alertType, setAlertType,
                    alertMessage, setAlertMessage,
                    alertIconType, setAlertIconType,
                    handleOutputChanges, switchFunction,
                    handleAlert, toggleAlertClasses,
                    setInfoCount,
                    showOutputType, setShowOutputType,
                    outputType, setOutputType
                }
            }
        >
            {children}
        </Context.Provider>
    )
}

GlobalContext.propTypes = {
    children: PropTypes.node.isRequired,
}
export default GlobalContext