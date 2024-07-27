import { FormEvent, MouseEvent, useState } from "react";
import "./App.css";
import { Note } from "./Note";
import { defaultNotes } from "./defaultNotes";

const App = () => {
  const [content, setContent] = useState<string>(""); // content state
  const [notes, setNotes] = useState<Note[]>(defaultNotes); // notes state
  const [selectedNote, setSelectedNote] = useState<Note | null>(null); // selected note state
  const [title, setTitle] = useState<string>(""); // title state

  // event handler for adding new note
  const handleAddNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent page refresh

    // console.log("title", title);
    // console.log("content", content);

    const newNote: Note = {
      id: Math.random(),
      title,
      content,
    }; // create new note object

    setNotes([...notes, newNote]); // add new note to the notes array
    setTitle(""); // clear title input
    setContent(""); // clear content input
  };

  // event handler for deleting note
  const handleUpdateNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent page refresh

    if (!selectedNote) return; // if no selected note, return

    const updatedNote: Note = {
      id: selectedNote.id, // keep the same id
      title: title, // update title
      content: content, // update content
    }; // create updated note object

    const updatedNotesList = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    ); // map through notes and replace the selected note with the updated note

    setNotes(updatedNotesList); // update notes array
    setTitle(""); // clear title input
    setContent(""); // clear content input
    setSelectedNote(null); // clear selected note
  };

  // event handler for deleting note
  const deleteNote = (event: MouseEvent, noteId: number) => {
    event.stopPropagation(); // prevent note click event from firing
    const updatedNotes = notes.filter((note) => note.id !== noteId); // filter out the note with the matching id
    setNotes(updatedNotes); // update notes array
  };

  // event handler for note click
  const handleNoteClick = (note: Note) => {
    setSelectedNote(note); // set selected note
    setTitle(note.title); // set title
    setContent(note.content); // set content
  };

  // event handler for cancel button
  const handleCancel = () => {
    setSelectedNote(null); // clear selected note
    setTitle(""); // clear title input
    setContent(""); // clear content input
  };

  return (
    <div className="app-container">
      <form
        className="note-form"
        onSubmit={(event) =>
          selectedNote ? handleUpdateNote(event) : handleAddNote(event)
        }
      >
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content"
          rows={10}
          required
        />
        {selectedNote ? (
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Add Note</button>
        )}
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note-item"
            onClick={() => handleNoteClick(note)}
          >
            <div className="notes-header">
              <button onClick={(event) => deleteNote(event, note.id)}>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
