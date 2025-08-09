import { useCallback, useEffect, useState } from "react";

export default function useScreenSize(smallScreenSize = 768){
    const [onSmallDevice, setOnSmallDevice] = useState(false);
    
      const checkScreenSize = useCallback(() => {
        if (window.innerWidth <= smallScreenSize) {
          setOnSmallDevice(true);
        } else {
          setOnSmallDevice(false);
        }
      }, [smallScreenSize]);
    
    
      useEffect(() => {
        checkScreenSize();
        
        window.addEventListener("resize", checkScreenSize)
    
        // clean up area (importance)
        return () => {
            window.removeEventListener("resize", checkScreenSize)
        }
      }, [checkScreenSize]);
      return onSmallDevice;
}