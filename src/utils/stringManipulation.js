let lowercase = (str) => {
    str = String(str)
    return str.toLowerCase()
}

let uppercase = (str) => {
    return str.toUpperCase()
}
let capitalize = (str, type) => {
    str = str.split(type)
    str = str.map((elem) => {
        let f = "", l = "";
        let i = 0;
        while (elem[i] === " ") {
            f += " ";
            i++;
        }
        i = 0;
        while (elem[elem.length - 1 - i] === " ") {
            l += " ";
            i++;
        }
        if (elem.trim() !== '') {
            return f + elem.trim()[0].toUpperCase() + elem.trim().substring(1) + l;
        } else {
            return elem;
        }
    })
    return str.join(type)
}

let reverseCase = (str) => {
    let reversed = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === str[i]) {
            reversed += str[i].toLowerCase();
        } else {
            reversed += str[i].toUpperCase();
        }
    }
    return reversed;
}
let reverseText = (str) => {
    str = String(str)
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let remove = (str, toRemove = " ") => {
    str = String(str)
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== toRemove) {
            newStr += str[i]
        }
    }
    return newStr;
}

const extractUniqueWords = (str, type = "string") => {
    const words = extractWords(str);
    const uniqueWordsSet = new Set(words);
    const uniqueWordsArray = Array.from(uniqueWordsSet).sort();
    return type === "array" ? JSON.stringify(uniqueWordsArray) : uniqueWordsArray.join(" ");
};

const extractWords = (str) => {
    str = String(str);
    const words = str.trim().split(/\s+/).filter((word) => word !== "");

    return words;
};

let extractUniqueLetters = (str, type = "string") => {
    str = str.replace(/[^a-zA-Z]/g, "");
    str = str.split("")
    let set = new Set();
    str.forEach(elem => {
        set.add(elem)
    })
    let newArr = Array.from(set).sort()
    return type === "array" ? JSON.stringify(newArr) : (newArr).join(" ");
}

const extractUniqueCharacters = (str) => {
    str = String(str);
    const uniqueChars = [...new Set(str)];
    const sortedUniqueChars = uniqueChars.sort();

    return sortedUniqueChars;
};

let extractUniqueNumbers = (str, type = "string") => {
    str = str.replace(/[^0-9\s]/g, "");
    str = str.split(" ")
    let set = new Set();
    str.forEach(elem => {
        set.add(elem)
    })
    let arr = [];
    set.forEach((num) => {
        arr.push(parseInt(num))
    })
    arr = arr.filter(num => isNaN(num) === false)
    return type === "string" ? arr.join(" ") : JSON.stringify(arr)
}

const extractSentences = (str) => {
    str = String(str);
    const sentences = str.split(".").filter((sent) => sent.trim() !== "");

    return sentences;
};



export {
    uppercase,
    lowercase,
    capitalize,
    reverseCase,
    reverseText,
    remove,
    extractUniqueWords,
    extractUniqueLetters,
    extractUniqueNumbers,
    extractUniqueCharacters,
    extractWords,
    extractSentences
}