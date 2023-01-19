const Note = ({ id, title, body, onClick }) => {
    return (
        <div className="note" onClick={onClick}>
        <h3>{title}</h3>
        <p>{body}</p>
        </div>
    );
    }

export default Note;