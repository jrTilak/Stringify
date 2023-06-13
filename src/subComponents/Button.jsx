import { useGlobalContext } from "../GlobalContext";
import idMaker from "../utils/idMaker"
import { capitalize, lowercase, remove, reverseCase, reverseText, uppercase } from "../utils/stringManipulation";
const Button = ({ service, categoryTitle }) => {
    const {
        setShowServiceContent,
        setCategoryTitle,
        setServiceTitle,
        setServiceDesc,
        handleOutputChanges,
        setRunBtnText
    } = useGlobalContext()
    const handleBtnClick = (e) => {
        const serviceTitle = service.title;
        const serviceDesc = service.desc;
        setShowServiceContent(true);
        setServiceTitle(serviceTitle);
        setServiceDesc(serviceDesc)
        setCategoryTitle(categoryTitle)
        setRunBtnText(serviceTitle)
        console.log(e.currentTarget.id)
        handleOutputChanges(e);
        // if (String(inputValue).trim() === "") {
            document.querySelector("#input-text").focus();
        // }
        // else {
        //     document.querySelector("#output-text").focus();
        // }
        window.scroll({
            top: 100,
            behavior: "smooth",
        });

    }

    return (
        <button
            onClick={handleBtnClick}
            className="btn"
            type="button"
            id={idMaker(service.title, "button")}
        >
            <div className="btn-title">
                <h3>{service.title}</h3>
                <i className='bx bx-chevron-right'></i>
            </div>
            <hr />
            <p className="desc">{service.desc.length > 100 ? service.desc.substring(0, 90) + "..." : service.desc}</p>
        </button>
    )
}
export default Button