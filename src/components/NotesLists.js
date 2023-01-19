import { useEffect, useState } from "react";
import Note from "./Note";
import NotesServices from "../services/NotesServices";
const NotesLists = () => {
    const [note, setNote] = useState([]);
    const [noteslist, setnotelist] = useState([
        {
            id: 1,
            title: "Note 1",
            body: "This is note 1",


        },

        {
            id: 2,
            title: "Note 2",
            body: "This is note 2",
        },
    ]);

    useEffect(() => {
        NotesServices.getAll().then((response) => {
            setnotelist(response.data);
        })
            .catch((error) => {
                console.log(error);
            });

    }, []);
    const onNoteClick = (id) => {

        const note = noteslist.find((note) => note.id === id);
        setNote(note);
    };

  return (
    <div className="notes-list">
      {noteslist && noteslist.map(note => (
        <Note key={note.id} {...note} onClick={() => onNoteClick(note.id)} />
      ))}
    </div>
  );
}

export default NotesLists;