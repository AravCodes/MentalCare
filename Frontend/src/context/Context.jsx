import { createContext, useState } from "react";
export const Context = createContext();

//FOR PARKINSON PREDICTION

const ContextProvider = (props)=>{

    //input : object with all the values extracted from the voice sample {console.log(news)}
    const[input,setInput] = useState({});
    const[showResult,setShowResult] = useState(false);
    //result : string:"Parkinson detected"
    const[result,setResult] = useState("");
    const[newsLoading,setNewsLoading] = useState(true);
    const[recentStudiesClicked,setRecentStudiesClicked] = useState(false);
    const [news, setNews] = useState([]);




    const contextValue = {
        input,setInput,
        showResult,setShowResult,
        result,setResult,
        newsLoading,setNewsLoading,
        setRecentStudiesClicked,recentStudiesClicked,
        news,setNews
    }


    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )


}

export default ContextProvider;