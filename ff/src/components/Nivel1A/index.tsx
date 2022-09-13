import React, {useEffect, useState} from "react";
import {Video} from "./Nivel1A.styles";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../firebase";

const Nivel1A = () => {
    let obj:any;
    const [aVideos, setAVideos] = useState([{id: "" , data: obj}])

    useEffect(() => {
        const userColRef = query(collection(db, 'avideos'), orderBy('created', 'desc'))
        onSnapshot(userColRef, (snapshot) => {
            setAVideos(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    },[])
    if(aVideos[0].data === undefined){
        return (
            <div>Cargando...</div>
        )
    }
    return(
        <Video
            src={aVideos[0].data.link+"&autoplay=1&mute=1"}
        ></Video>
    )
}
export default Nivel1A;