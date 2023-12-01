import { useState } from 'react';
import Card from './Card'

function Cards(props){
    const [likedCourses, setLikedCourses] = useState([]);
    let category = props.category;

    function getCourses(courseData){
        if(category === "All"){
            let allCourses = [];
            // console.log(Object.values(courseData));
            Object.values(courseData).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
    
            return allCourses;
        }

        else{
            //mai specific category ka data pass karunga
            return courseData[category];
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses(props.courses.data).map((course)=>{
                    return (
                        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                    );
                })
            }
        </div>
    );
}

export default Cards;