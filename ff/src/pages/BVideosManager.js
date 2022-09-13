import User from './User'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, addDoc, Timestamp} from "firebase/firestore"
import {db} from '../firebase'
import BVideo from "./BVideo";


const BVideosManager = () =>{
    const [bVideos, setBVideos] = useState([])
    const [link, setLink] = useState('')

    /* function to get all tasks from firestore in realtime */
    useEffect(() => {
        const userColRef = query(collection(db, 'bvideos'), orderBy('created', 'desc'))
        onSnapshot(userColRef, (snapshot) => {
            setBVideos(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    },[])

    /* function to add new task to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'bvideos'), {
                link: link,
                created: Timestamp.now()
            })
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <h1>BVideos Manager</h1>
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

                    {bVideos.map((bvideo) => (
                        <BVideo
                            id={bvideo.id}
                            key={bvideo.id}
                            videoLink={bvideo.data.link}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}

export default BVideosManager
