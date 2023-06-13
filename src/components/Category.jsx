import Button from "../subComponents/Button"
import idMaker from "../utils/idMaker"
const Category = ({ category }) => {
  return (
    <>
      <div className="category" id={idMaker(category.title, "category")}>
        <h2 className="category-title">
          {category.title}:
        </h2>
        <div className="services">
          {(category.services).map((service) => {
            return (
              <Button
                key={idMaker(service.title, "category")}
                service={service}
                categoryTitle={category.title}
              />
            )
          })}
        </div>
        <hr />
      </div>
    </>
  )
}
export default Category