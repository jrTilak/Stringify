import Category from './components/Category'
import Heading from "./components/Heading"
import Alert from "./subComponents/Alert"
import services from "./services"
import idMaker from "./utils/idMaker"
import Input from "./components/Input"


function App() {
  return (
    <>
      <Heading />
      <Alert />
      <Input
      />
      {services.map((service) => {
        return (
          <Category
            key={idMaker(service.title, "service")}
            category={service}
          />
        )
      })}
    </>
  )
}

export default App
