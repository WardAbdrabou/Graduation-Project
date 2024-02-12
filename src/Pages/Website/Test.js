// import { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";

// export default function Test(){
//     const [click , setClick] = useState("");
//     const count = useRef(0) ;
    
//     useEffect(() => {
//         count.current = count.current + 1;
//     });
     
//     return(
//         <div>
//             <input value={click} onChange={e =>{ 
//                 setClick(e.target.value)}}
//             placeholder="write"
//             />
//             <p>Count : {count.current}</p>
//         </div>
//     );
// }

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Test(){
    const [click , setClick] = useState("");
    const name = useRef("") ;
    console.log(name);

    console.log(document.querySelector(".test"));
    useEffect(() => {} , [] );

    return(
        <div>
            <input value={click} onChange={e =>{ 
                setClick(e.target.value)}}
            placeholder="write"
            />
            <p ref={name} className="test"> Ahmed </p>
        </div>
    );
}