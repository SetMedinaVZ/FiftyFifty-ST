import User from './User'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, addDoc, Timestamp} from "firebase/firestore"
import {db} from '../firebase'


const UserManager = () =>{
    const [openAddModal, setOpenAddModal] = useState(false)
    const [users, setUsers] = useState([])
    const [key, setKey] = useState('')

    /* function to get all tasks from firestore in realtime */
    useEffect(() => {
        const userColRef = query(collection(db, 'users'), orderBy('created', 'desc'))
        onSnapshot(userColRef, (snapshot) => {
            setUsers(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    },[])

    /* function to add new task to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'users'), {
                key: key,
                created: Timestamp.now()
            })
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <h1>User Manager</h1>
            <div>
                <form onSubmit={handleSubmit} name='addUser'>
                    <input
                        type='text'
                        name='key'
                        onChange={(e) => setKey(e.target.value)}
                        value={key}
                        placeholder='Enter secret key'/>
                    <button type='submit'>Add User</button>
                </form>
                <div>

                    {users.map((user) => (
                        <User
                            id={user.id}
                            key={user.id}
                            userKey={user.data.key}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}

export default UserManager
