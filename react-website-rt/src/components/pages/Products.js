import React from "react";
import '../../App.css';
import axios from 'axios';

class Products extends React.Component { 
    state = {details: [], }

    componentDidMount() {
        let data;
        axios.get('http://localhost:8000')
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
            </div>
        )
    }
}

export default Products