const URLencoder = (url) => {
    return encodeURI(url);
}
const extractURLsFromString = (str, type = "string") => {
    const urlRegex = /(https?:\/\/[^\s]+)|([^\s]+\.[^\s]+)/g;
    const urls = str.match(urlRegex);
    return type==="array" ? JSON.stringify(urls) : urls;
}

const extractEmailsFromString = (str, type="string") => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const emails = str.match(emailRegex);
    return type === "array" ? JSON.stringify(emails) : emails;
}

const extractPhoneNumbersFromString = (str, type="string") => {
    const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;
    const phoneNumbers = str.match(phoneRegex);
    return type === "array" ? JSON.stringify(phoneNumbers) : phoneNumbers;
}

export {
    URLencoder,
    extractURLsFromString,
    extractEmailsFromString,
    extractPhoneNumbersFromString
}