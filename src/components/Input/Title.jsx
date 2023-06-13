import { useGlobalContext } from "../../GlobalContext"

const Title = () => {
  const {
    showServiceContent,
    categoryTitle,
    serviceTitle,
    serviceDesc
  } = useGlobalContext()

  return (
    <>
      <h2 className="category-title">{showServiceContent ? categoryTitle : "Text Analysis"}</h2>
      {showServiceContent &&
        <>
          <div className="serviceDetails">
            <h3>{serviceTitle}:</h3>
            <p>
              <i className='bx bx-chevrons-right' ></i>
              <span>
                {serviceDesc}
              </span>
            </p >
          </div >
        </>
      }
    </>
  )
}
export default Title