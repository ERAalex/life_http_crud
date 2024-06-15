import {useState, useEffect} from 'react'
import request from 'axios'
import ItemNotes from './ItemNotes'

export default function ListNotes() {
    const [list, setList] = useState([])

    const getData = async () => {
        try {
          const response = await fetch('http://localhost:7070/notes');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setList(data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };


      const handleDelete = async (id) => {
        try {
          const response = await fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          getData();

        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };


    return (
        <div>
            <h1>List Notes</h1>
            <button onClick={getData}>Get Data</button>
            <ul>    
                {/* {list && list.length > 0 ? (
                  list.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                  <li>No notes available</li> // Code to be executed when list is empty
                )} */}


            {list && list.length > 0 ? (
                  list.map((item) => <ItemNotes key={item.id} notes={item} onDelete={handleDelete}/>)
                ) : (
                  <li>No notes available</li> // Code to be executed when list is empty
                )}


            </ul>
        </div>
    )
}
