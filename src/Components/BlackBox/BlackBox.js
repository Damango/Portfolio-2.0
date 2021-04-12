import React, {useState, useEffect} from 'react';


const BlackBox = (props) => {






    const [boxState, setBoxState] = useState(Math.floor(Math.random() * 1000))
    const [boxState2, setBoxState2] = useState(Math.floor(Math.random() * 100))

    const [counter,setCounter] = useState(0)




    
        setTimeout(() => {
            setBoxState(Math.floor(Math.random() * 500))
            setBoxState2(Math.floor(Math.random() * 1000))
        }, 2000)
 





 



    return ( <div className="black-box-container" style={{top: boxState, left: boxState2, animationDelay: Math.floor(Math.random() * 5)}}><div  className="black-box" ></div></div> );
}
 
export default BlackBox;