import React, {useEffect, useState} from "react";
import {LargeWindow, Video, Wrapper} from "./Nivel1A.styles";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../firebase";
import {useNavigate} from "react-router-dom";

const Nivel1A = () => {
    let obj:any;
    const navigate = useNavigate();
    const [command, setCommand] = useState("")
    const [index, setIndex] = useState(0)
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
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setCommand(value);
    };
    if(command === "sudo ff change video next"){
        setCommand("")
        if(index+1 > aVideos.length-1){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }
    }
    if(command === "ff"){
        if(Math.floor(Math.random() * (0 - 1 + 1)) === 1)
            navigate("/")
        else
            navigate("/level2a")
    }
    return(
        <Wrapper>
            {aVideos[index].data.link !== undefined ?
                <Video
                    src={aVideos[index].data.link + "&autoplay=1&mute=1"}
                ></Video>
                :
                <div>Cargando</div>
            }
            <LargeWindow>
                {">>"}
                <input maxLength={25} onChange={handleInput} value={command}/>
            </LargeWindow>
        </Wrapper>
    )
}
export default Nivel1A;