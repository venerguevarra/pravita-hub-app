import { useCallback, useRef, useState } from "react";

export function useCountdown(initialSeconds: number) {
    const [seconds, setSeconds] = useState<number>(initialSeconds);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<number | null>(null);

    const clear = useCallback((): void => {
        if (intervalRef.current != null) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const restart = useCallback((): void => {
        clear();
        setSeconds(initialSeconds);
        setIsRunning(true);

        intervalRef.current = window.setInterval((): void => {
            setSeconds((current: number): number => {
                if (current <= 1) {
                    clear();
                    setIsRunning(false);
                    return 0;
                }
                return current - 1;
            });
        }, 1000);
    }, [clear, initialSeconds]);

    const complete = useCallback((): void => {
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
