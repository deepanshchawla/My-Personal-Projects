import React,{ useEffect,useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag(){

    const [tag, setTag] = useState('car'); 
    const [gif,loading,fetchData] = useGif(tag);

    function changeHandler(e){
        setTag(e.target.value);
    }

    return (
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="text-2xl mt-[15px] underline uppercase font-bold">Random {tag} Gif</h1>

            {
                loading?<Spinner></Spinner>:<img src={gif} width={450}/>
            }

            <input value={tag} onChange={changeHandler} className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"/>

            <button onClick={()=>fetchData()} className="mb-[20px] w-10/12 uppercase bg-yellow-500 text-lg py-2 rounded-lg font-semibold">
                Generate
            </button>
        </div>
    );
}