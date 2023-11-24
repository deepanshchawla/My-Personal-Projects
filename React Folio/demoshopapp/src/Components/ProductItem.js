import React, {useState} from 'react';
import Card from './Card';
import ProductDate from './ProductDate';

function ProductItem(props){

    const [title, setTitle] = useState(props.title);
    
    // let title = props.title;

    function clickHandler(){
        // title = "popcorn";
        setTitle("popcorn");
        console.log("button clicked");
    }

    return (
        <Card className="product-item">
            <ProductDate date={props.date}></ProductDate>
            <div>
                <h2>
                    {title}
                </h2>
            </div>
            <button onClick={clickHandler}>
                Add To Cart
            </button>
        </Card>
    );
}

export default ProductItem;