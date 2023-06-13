import { useGlobalContext } from "../../GlobalContext"
import idMaker from "../../utils/idMaker"

const Run = () => {
    const { showServiceContent, runBtnText, showCharacterType, characterType, setCharacterType, switchFunction, showOutputType, setOutputType } = useGlobalContext()

    return (
        <>
            {showServiceContent &&
                <div className="run">
                    {showOutputType &&
                        <label htmlFor="outputType">Output Type:
                            <select id="outputType" onChange={(e) => {
                                setOutputType(e.target.value)
                            }}>
                                <option value="string">String</option>
                                <option value="array">Array</option>
                            </select>
                        </label>}
                    {showCharacterType &&
                        <input
                            id="characterType"
                            type="text"
                            placeholder="Character"
                            maxLength={1}
                            value={characterType}
                            autoComplete="off"
                            onChange={(e) => setCharacterType(e.target.value)}
                        />
                    }

                    <button
                        className={idMaker(runBtnText, "button")}
                        onClick={(e) => {
                            switchFunction(e.currentTarget.classList[0], `${runBtnText} run successfully.`)
                        }}>
                        <span>{runBtnText}</span>
                        <i className='bx bx-play'></i>
                    </button>


                </div>
            }
        </>
    )
}
export default Run