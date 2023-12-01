import React, { useEffect, useState } from "react";
import {filterData, apiUrl} from "./data"
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards"
import Filter from "./Components/Filter";
import Spinner from './Components/Spinner';
import {toast} from 'react-toastify';

const App = () => {

	const [courses, setCourses] = useState([]);
	const [loading,setLoading] = useState(true);
	const [category,setCategory] = useState(filterData[0].title);

	const fetchData = async ()=>{
		setLoading(true);
		try{
			let response = await fetch(apiUrl);
			let output = await response.json();

			//save data into a variable
			// console.log(output);
			setCourses(output);
		}

		catch(error){
			toast.error("something went wrong");
		}

		setLoading(false);
	}

	useEffect(()=>{
		fetchData();
	}, []);

	// console.log(courses);
	return (
		<div className="min-h-screen flex flex-col bg-bgDark2">
			<div>
				<Navbar></Navbar>
			</div>

			<div>
				<div>
					<Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
				</div>

				<div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
					{loading?<Spinner></Spinner>:<Cards courses={courses} category={category}></Cards>}
				</div>
			</div>
		</div>
	);
};

export default App;
