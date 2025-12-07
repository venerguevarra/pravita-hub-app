import { useCallback, useRef, useState } from "react";

export function useCountdown(initialSeconds: number) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const clear = useCallback(() => {
        if (intervalRef.current != null) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const restart = useCallback(() => {
        clear();
        setSeconds(initialSeconds);
        setIsRunning(true);

        intervalRef.current = window.setInterval(() => {
            setSeconds((current) => {
                if (current <= 1) {
                    clear();
                    setIsRunning(false);
                    return 0;
                }
                return current - 1;
            });
        }, 1000);
    }, [clear, initialSeconds]);

    const complete = useCallback(() => {
        clear();
        setSeconds(0);
        setIsRunning(false);
    }, [clear]);

    return {
        seconds,
        isRunning,
        restart,
        complete,
    };
}
