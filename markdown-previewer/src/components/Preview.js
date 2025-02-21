// Component displays a preview of the text entered by the user.
export function Preview() {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-0 bg-sky-100 w-72 sm:w-10/12 text-center mt-4 rounded-t-md max-w-7xl">
        Preview:
      </h2>
      <div
        id="preview"
        className="w-72 sm:w-10/12 h-64 max-w-7xl p-2 mt-0 border-2 border-sky-400 shadow-md overflow-y-auto bg-sky-50 rounded-b-md"
      ></div>
    </>
  );
}
