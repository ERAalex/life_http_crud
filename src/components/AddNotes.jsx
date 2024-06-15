import {useState, useEffect} from 'react'
import './css/item.css'

export default function AddNotes({onSubmit}) {

    const [note, setNote] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ note }),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          // update data
          onSubmit();

          // Reset the form
          setNote('');
        } catch (error) {
          console.log('Error:', error);
        }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add Note:
                    <input
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </label>
                <button type="submit">Добавить запись</button>
            </form>
        </div>
    )
}
