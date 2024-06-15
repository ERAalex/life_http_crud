import {useState, useEffect} from 'react'
import './css/item.css'

export default function ItemNotes({notes, onDelete}) {


    return (

        <div className='item-notes'>
            {notes.note}
            <button className="delete-button" onClick={() => onDelete(notes.id)}>X</button>
        </div>

    )



}
