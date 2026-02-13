import { useState, useEffect } from 'react';

const THRESHOLD = 30;

const usePageScroll = () => {
    const [scrollDirection, setScrollDirection] = useState("up");

    const [latestScroll, setLatestScroll] = useState(0);

    useEffect(() => {
        const updateScrollDirection = () => {
            const scrollY = window.scrollY;

            const direction = scrollY > latestScroll ? 'down' : 'up';

            if (
                direction !== scrollDirection && 
                (Math.abs(scrollY - latestScroll) > THRESHOLD || scrollY < THRESHOLD) 
            ) {
                setScrollDirection(direction);
            }

            setLatestScroll(scrollY > 0 ? scrollY : 0);
        };

        window.addEventListener('scroll', updateScrollDirection);

        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollDirection, latestScroll]);
    return scrollDirection;
}

export default usePageScroll;
