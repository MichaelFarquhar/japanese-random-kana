import { useEffect, useCallback } from 'react';

type SpaceKeyOptions = {
    enabled?: boolean;
};

const useSpaceKey = (callback: () => void, options: SpaceKeyOptions = {}) => {
    const { enabled = true } = options;

    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (event.code === 'Space' && !event.repeat && enabled) {
                event.preventDefault();
                callback();
            }
        },
        [callback, enabled]
    );

    useEffect(() => {
        if (enabled) {
            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown', handleKeyPress);
        }
    }, [handleKeyPress, enabled]);
};

export default useSpaceKey;
