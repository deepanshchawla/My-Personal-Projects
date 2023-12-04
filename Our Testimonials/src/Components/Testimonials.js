import { useCallback, useState } from "react";
import Card from "./Card"

function Testimonial(props){
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);

    return (
        <div className="rounded-md w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
            <Card review={reviews[index]} index={index} setIndex={setIndex} totalsize={props.totalsize}></Card>
        </div>
    );
}

export default Testimonial;