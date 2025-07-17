import { useEffect, useState } from "react"

const useScrollDetect = () => {
   const [scrolled,setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if(!scrolled){
                setScrolled(true);
            }
            console.log("scrolled");
        }
        window.addEventListener("scroll",onScroll)

        return () => {
            window.removeEventListener("scroll",onScroll);
        }
    },[])

    return {scrolled}

}

export default useScrollDetect;