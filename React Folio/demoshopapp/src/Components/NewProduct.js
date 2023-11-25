import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props){
    function saveProduct(product){
        console.log("I am inside new product");
        console.log(product);

        props.pranay(product);
    }

    return (
        <div className="new-product">
            <ProductForm  onSaveProduct={saveProduct} />
        </div>
    );
}

export default NewProduct;