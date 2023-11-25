import './ProductForm.css'
import React, {useState} from 'react';

function ProductForm(props){
    // this is the syntax which we will use when we have multiple states for handling
    const [newTitle,setTitle] = useState("");
    const [newDate,setDate] = useState("");

    let titleChangeHandler = (e)=>{
        setTitle(e.target.value);
    }
    
    let dateChangeHandler = (e)=>{
        setDate(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        const productData = {
            title:newTitle,
            date:newDate
        }

        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

     

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className="new-product_controls">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
                </div>

                <div className="new-product_control">    
                    <label>Date</label>
                    <input type="date" value={newDate} min="2023-01-01" max="2023-12-12" id="" onChange={dateChangeHandler}></input>
                </div>

                <div className="new-product_button">
                    <button type="submit">
                        Add Product
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ProductForm;