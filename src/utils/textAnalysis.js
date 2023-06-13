const charCountNoSpaces = (str) => {
    const inputStr = String(str);
    const stringWithoutSpaces = inputStr.replace(/[ \n]/g, "");
    return stringWithoutSpaces.length;
};

const charCountfn = (str) => {
    const inputStr = String(str);
    return inputStr.length;
};

export {
    charCountfn,
    charCountNoSpaces
};

