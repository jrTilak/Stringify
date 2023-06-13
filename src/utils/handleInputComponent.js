import services from "../services.json";
import idMaker from "./idMaker";

let getDetails = (id ="") => {
    let value = {
        parentTitle: "",
        services: {}
    };

    const matchingService = services.find((service) => {
        const matchingChild = service.services.filter((elem) => {
            return id === idMaker(elem.title, "button");
        });

        if (matchingChild.length > 0) {
            value.parentTitle = service.title;
            value.services = { ...matchingChild[0] };
            return true;
        }

        return false;
    });

    if (matchingService) {
        return value;
    }

    return null; // Return null if no matching child object is found
};

export default getDetails;
