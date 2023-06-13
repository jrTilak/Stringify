
const extractUniqueWords = (str, type = "string") => {
    str = String(str);
    const words = str.trim().split(/\s+/).filter((word) => word !== "");
    const uniqueWordsSet = new Set(words);
    const uniqueWordsArray = Array.from(uniqueWordsSet).sort();
    return type === "array" ? uniqueWordsArray : uniqueWordsArray.join(" ");
};

console.log(extractUniqueWords("Hello hello hello how low", "array"));