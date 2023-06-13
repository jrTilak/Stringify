import { useGlobalContext } from "../../GlobalContext"

const Info = () => {
  const { charCount, charNoSpacesCount, uniqueCharCount, wordCount, uniqueWordCount, sentCount } = useGlobalContext()
  return (
    <div className="info">
      <span className="chars">Characters: {charCount} </span>
      <span className="charsNoSpaces">Characters without spaces: {charNoSpacesCount} </span>
      <span className="uniqueChars">Unique Characters: {uniqueCharCount} </span>
      <span className="words">Words: {wordCount}</span>
      <span className="uWords">Unique Words: {uniqueWordCount} </span>
      <span className="sent">Sentences: {sentCount}</span>
    </div>
  )
}
export default Info