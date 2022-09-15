import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Wrapper} from "./Nivel2A.styles";
import {useNavigate} from "react-router-dom";

interface Props {
    change: () => void
}

const Box: React.FC<Props> = ({change}) => {
    const mesh = useRef()
    const [state, setState] = useState({isHovered: false, isActive: false})

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        // @ts-ignore
        mesh.current.position.y = mesh.current.position.y + Math.sin(time * 10) / 100
        // @ts-ignore
        mesh.current.rotation.y = mesh.current.rotation.x += 0.01
    })

    return (
        <mesh
            {...[8, 1, 1]}
            ref={mesh}
            scale={state.isHovered ? [3, 3, 3] : [2, 2, 2]}
            onClick={(e) => {
                change()
                setState({...state, isActive: !state.isActive})
            }
            }
            onPointerOver={(e) => setState({...state, isHovered: true})}
            onPointerOut={(e) => setState({...state, isHovered: false})}>
            <boxBufferGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={state.isActive ? '#66E3E0' : '#FD6396'}/>
        </mesh>
    )
}


const Nivel2A = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(0)
    const c = () => {
        setClicked(clicked + 1)
    }
    const change=()=> {
        if (Math.floor(Math.random() * (0 - 1 + 1)) === 1)
            window.open("http://localhost:3000/", "_self")
        else
            window.open("http://localhost:3000/level3a", "_self")
    }
    return (
        <>
            {clicked < 10 ?
                <Wrapper>
                    <Canvas>
                        <ambientLight intensity={0.5}/>
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                        <pointLight position={[-10, -10, -10]}/>
                        <Box change={c}/>
                    </Canvas>
                </Wrapper>
                :
                <Wrapper>
                    <button onClick={()=>change()}>u clicked too many times it broke</button>
                </Wrapper>
            }
        </>
    )
}
export default Nivel2A






