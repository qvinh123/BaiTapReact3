import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'

export default class ExerciseCarStore extends Component {
    products = [

        { id: 1, name: 'black car', img: './imgs/black-car.jpg', price: 1000 },

        { id: 2, name: 'red car', img: './imgs/red-car.jpg', price: 2000 },

        { id: 3, name: 'silver car', img: './imgs/silver-car.jpg', price: 3000 },

        { id: 4, name: 'Steel car', img: './imgs/steel-car.jpg', price: 4000 }

    ];


    state={
        sp: { id: 1, name: 'black car' ,img:'./imgs/black-car.jpg', price: 1000 },
    }


    xemChiTiet = (spClick) =>{
        this.setState({
            sp:spClick
        })
    } 

    render() {
        return (
            <div>
                <ProductList xemChiTiet={this.xemChiTiet} products={this.products}/>
                <Modal sp={this.state.sp}/>
            </div>
        )
    }
}
