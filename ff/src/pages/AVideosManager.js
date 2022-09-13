import User from './User'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, addDoc, Timestamp} from "firebase/firestore"
import {db} from '../firebase'
import AVideo from "./AVideo";


const AVideosManager = () =>{
    const [aVideos, setAVideos] = useState([])
    const [link, setLink] = useState('')

    /* function to get all tasks from firestore in realtime */
    useEffect(() => {
        const userColRef = query(collection(db, 'avideos'), orderBy('created', 'desc'))
        onSnapshot(userColRef, (snapshot) => {
            setAVideos(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    },[])

    /* function to add new task to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'avideos'), {
                link: link,
                created: Timestamp.now()
            })
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <h1>AVideos Manager</h1>
            <div>
                <form onSubmit={handleSubmit} name='addVideo'>
                    <input
                        type='text'
                        name='link'
                        onChange={(e) => setLink(e.target.value)}
                        value={link}
                        placeholder='Enter link'/>
                    <button type='submit'>Add Link</button>
                </form>
                <div>

                    {aVideos.map((avideo) => (
                        <AVideo
                            id={avideo.id}
                            key={avideo.id}
                            videoLink={avideo.data.link}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}

export default AVideosManager
