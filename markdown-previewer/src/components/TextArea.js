// Component that represents the TextArea in the app
export function TextArea(props) {
  const { text, handleChange } = props;
  return (
    <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-0 bg-sky-100 w-72 sm:w-10/12 text-center rounded-t-md max-w-7xl">
        Enter your text here:
      </h2>
      <textarea
        aria-label="Add text here"
        id="editor"
        className="w-72 sm:w-10/12 h-64 max-w-7xl p-2 border-2 border-sky-400 rounded-b-md shadow-md resize-none focus:outline-none bg-sky-50"
        value={text}
        onChange={handleChange}
      ></textarea>
    </>
  );
}
