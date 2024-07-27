/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { marked } from "marked";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Preview } from "./components/Preview";
import { TextArea } from "./components/TextArea";

function App() {
  const currentYear = new Date().getFullYear();

  const defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://www.example.com/)
\`Inline code\`
\`\`\`
// Code block
function example() {
  return "Hello, world!";
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150x150)
**Bolded text**`;

  // Set the state for the textarea
  const [text, setText] = useState(defaultMarkdown);

  // On initial render, set the preview
  useEffect(() => {
    const preview = document.getElementById("preview");
    preview.innerHTML = marked(text, { breaks: true }); // Set option "breaks" to true to interpret carriage returns as line breaks
  }, []);

  // Handle changes in textarea
  const handleChange = (e) => {
    const preview = document.getElementById("preview");
    setText(e.target.value); // Set new text state
    preview.innerHTML = marked(e.target.value, { breaks: true }); // Update the preview with new text, carriage returns as line breaks
  };

  return (
    <div className="bg-sky-400 dark:bg-sky-950 min-h-screen flex flex-col justify-between">
      <div>
        <Header />

        <div className="flex flex-col items-center justify-center min-h-full">
          <TextArea text={text} handleChange={handleChange} />
          <Preview />
        </div>
      </div>

      <Footer currentYear={currentYear} />
    </div>
  );
}

export default App;


