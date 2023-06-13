const idMaker = (str, type = "") => {
    str = str.trim();
    type = type.trim();

    const words = str.split(' ');
    const camelCaseWords = words.map((word, index) => {
        if (index === 0 && type === "") {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });

    const camelCaseStr = camelCaseWords.join('');

    if (type.length > 0) {
        return type + camelCaseStr;
    } else {
        return camelCaseStr;
    }
};
export default idMaker;