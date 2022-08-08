import {useState, useEffect} from "react";

function SavedValue(key, initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue){
        return savedValue
    }
    else{
        return initialValue;
    }
}

export default function LocalStorage(key, initialValue){
    let [value, setValue] = useState(() => {

       return SavedValue(key, initialValue);     
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key])

    return [value, setValue];
}
