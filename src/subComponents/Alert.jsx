import { useEffect } from "react"
import { useGlobalContext } from "../GlobalContext"

const Alert = () => {
    const { showAlert, setShowAlert, alertType, alertMessage, alertIconType, setAlertIconType, handleAlert, toggleAlertClasses } = useGlobalContext()
    useEffect(() => {
        if (showAlert) {
            toggleAlertClasses(alertType)
            setTimeout(() => {
                setShowAlert(false)
            }, 2000);
        }
        else {
            document.querySelector(".alert").classList.remove("active");
            setTimeout(() => {
                document.querySelector(".progress").classList.remove("active");
            }, 200);
        }
    }, [alertType, setAlertIconType, setShowAlert, showAlert])


    return (
        <div className="alert">
            <div className="alert-content">
                <i className={`bx ${alertIconType}`}></i>
                <div className="message">
                    <span className="text text-1">{alertType}</span>
                    <span className="text text-2">{alertMessage}</span>
                </div>
            </div>
            <div className="progress "></div>
        </div>
    )
}
export default Alert