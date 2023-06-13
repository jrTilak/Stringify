import Controls from "./Input/Controls"
import Info from "./Input/Info"
import InputField from "./Input/InputField"
import Run from "./Input/Run"
import Title from "./Input/Title"

const Input = () => {
    return (
        <>
            <Title />
            <div className="input-container">
                <Controls />
                <InputField />
                <Info />
                <Run />
            </div>
        </>
    )
}

export default Input
