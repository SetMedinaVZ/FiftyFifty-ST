import {useState} from 'react'
import {doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase'

const User = ({id, userKey}) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const [key, setKey] = useState(userKey)
    /* function to update firestore */
    const handleUpdate = async (e) => {
        e.preventDefault()
        const userDocRef = doc(db, 'users', id)
        try {
            await updateDoc(userDocRef, {
                key: key,
            })
            handleClose()
        } catch (err) {
            alert(err)
        }
    }

    const handleDelete = async () => {
        const userDocRef = doc(db, 'users', id)
        try {
            await deleteDoc(userDocRef)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <div>{userKey}</div>
            <div>
                <button onClick={() => setOpen(true)}>
                    Edit
                </button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            {open &&
                <form onSubmit={handleUpdate}>
                    <input type='text' name='key' onChange={(e) => setKey(e.target.value)} value={key}/>
                    <button type='submit'>Edit</button>
                </form>
            }
        </div>
    )
}

export default User