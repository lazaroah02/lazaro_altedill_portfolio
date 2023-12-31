import { createContext, useState, useEffect } from "react";

const LanguageContext = createContext('en')

export function LanguageContextProvider({children}){
    const [lang, setLang] = useState('en')
    //recovery the language from the localstorage
    useEffect(() => {
        let navigatorLanguage = window.navigator.language
        let language = localStorage.getItem('language')
        if(language === null || lang === undefined){
            if(navigatorLanguage.includes('es')){
                setLanguage('es')
            }
            else{
                setLanguage('en')
            } 
        }else{
            setLanguage(language)
        }
    },[])

    //save the current language on the local storage
    function setLanguage(language){
        localStorage.setItem('language', language)
        setLang(language)
    }

    return(
        <LanguageContext.Provider value = {{lang, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext