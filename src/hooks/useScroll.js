import { useEffect, useState } from "react";
import { useScrollTracker } from "react-scroll-tracker";

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);
    const { scrollY: scrollyP } = useScrollTracker();
    useEffect(() => {
        setScrollY(window.scrollY);
    }, [scrollyP]);
    const [previousScrollValue, setPreviousScrollValue] = useState(null);
    const [isSticky, setIsSticky] = useState(true);
    useEffect(() => {
        if (!previousScrollValue) {
            return setIsSticky(true);
        }
        if (scrollY === 0) {
            setIsSticky(true);
        } else if (scrollY > previousScrollValue) {
            setIsSticky(false);
        } else if (scrollY < previousScrollValue) {
            setIsSticky(true);
        }
    }, [scrollY]);
    useEffect(() => {
        setPreviousScrollValue(scrollY);
    }, [scrollY]);
    return isSticky
};

export default useScroll;