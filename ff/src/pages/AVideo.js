import {useState} from 'react'
import {doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase'

const AVideo = ({id, videoLink}) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const [link, setLink] = useState(videoLink)
    /* function to update firestore */
    const handleUpdate = async (e) => {
        e.preventDefault()
        const userDocRef = doc(db, 'avideos', id)
        try {
            await updateDoc(userDocRef, {
                link: link,
            })
            handleClose()
        } catch (err) {
            alert(err)
        }
    }

    const handleDelete = async () => {
        const userDocRef = doc(db, 'avideos', id)
        try {
            await deleteDoc(userDocRef)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <div>{videoLink}</div>
            <div>
                <button onClick={() => setOpen(true)}>
                    Edit
                </button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            {open &&
                <form onSubmit={handleUpdate}>
                    <input type='text' name='link' onChange={(e) => setLink(e.target.value)} value={link}/>
                    <button type='submit'>Edit</button>
                </form>
            }
        </div>
    )
}

export default AVideo