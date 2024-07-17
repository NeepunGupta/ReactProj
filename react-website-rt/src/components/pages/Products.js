import React from "react";
import '../../App.css';
import axios from 'axios';
import '../forms/ProductForm';
import ProductForm from "../forms/ProductForm";

class Products extends React.Component { 
    state = {details: [], }

    componentDidMount() {
        let data;
        axios.get('http://34.221.226.23:8000')
            .then(res=> {
                data = res.data;
                this.setState({
                    details: data
                })
            })
            .catch(err=> { })
    }

    render() {
        return (
            <div>
                <header> Data from Django </header>
                <hr></hr>
                {this.state.details.map((output,id) => (
                    <div key={id}>
                        <div>
                            <h2>{output.product}</h2>
                        </div>
                    </div>
                ))}
                <ProductForm></ProductForm>
            </div>
        )
    }
}

export default Products