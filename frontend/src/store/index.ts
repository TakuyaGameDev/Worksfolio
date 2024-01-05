import { useState, useCallback } from 'react'

export const getLocalStorageValue = (key: string, initValue: any = null) => {
    const item = localStorage.getItem(key)

    return item ? JSON.parse(item) : initValue
}

export const useLocalStorage = (key: string, initValue: any) => {
    const [value, setValue] = useState(() =>
        getLocalStorageValue(key, initValue)
    );

    const setLocalStorageValue = useCallback(
        (setStateAction: any | ((prevState: any) => any)) => {
    const newValue =
        setStateAction instanceof Function
        ? setStateAction(value)
        : setStateAction;

        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(() => newValue);
    },[key, value]);

    return [value, setLocalStorageValue] as const;
};

export const resetLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}