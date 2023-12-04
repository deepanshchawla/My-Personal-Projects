import { Suspense } from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

function Card(props){
    let review = props.review;
    // let index = 
    function leftButtonHandler(){
        props.setIndex(((props.index-1)+props.totalsize)%props.totalsize);
    }

    function rightButtonHandler(){
        props.setIndex((props.index+1)%props.totalsize);
    }

    function surpriseButtonHandler(){
        props.setIndex(Math.floor(Math.random() * (props.totalsize-1)));
    }

    return (
        <div className='flex flex-col md:relative'>

            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                
                <img className='aspect-square rounded-full w-[140px] h-[140px] z-25' src={review.image}></img>

                <div className="rounded-full w-[140px] h-[140px] bg-violet-500 absolute z-[-10] top-[-6px]  left-[10px]">

                </div>
            </div>

            <div className="text-center mt-7">
                <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
                <p className='uppercase text-violet-300 text-sm'>{review.job}</p>
            </div>

            <div className="">
            </div>

            <div className='mx-auto text-violet-400 mt-5'>
                <FaQuoteLeft></FaQuoteLeft>
            </div>

            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>

            <div className='mx-auto text-violet-400 mt-5'>
                <FaQuoteRight></FaQuoteRight>
            </div>

            <div className='flex text-3xl mt-10 gap-3 justify-center text-violet-400 font-bold'>
                <button onClick={leftButtonHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft></FiChevronLeft>
                </button>

                <button onClick={rightButtonHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>

            <div className='mt-5'>
                <button onClick={surpriseButtonHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 rounded-md py-2 text-white font-bold text-lg'>
                    Surprise Me
                </button>
            </div>
        </div>
    );
}

export default Card;