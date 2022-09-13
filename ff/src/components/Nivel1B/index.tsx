import React, {useEffect, useState} from "react";
import {Video} from "./Nivel1B.styles";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../firebase";

const Nivel1B = () => {
    let obj:any;
    const [bVideos, setBVideos] = useState([{id: "" , data: obj}])

    useEffect(() => {
        const userColRef = query(collection(db, 'bvideos'), orderBy('created', 'desc'))
        onSnapshot(userColRef, (snapshot) => {
            setBVideos(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    },[])
    if(bVideos[0].data === undefined){
        return (
            <div>Cargando...</div>
        )
    }
    return(
        <Video
            src={bVideos[0].data.link+"&autoplay=1&mute=1"}
        ></Video>
    )
}
export default Nivel1B;