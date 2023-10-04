import React from "react";
import { Link } from "react-router-dom";
import './Products.css'
import FormatCurrency from "../FormatCurrency";
    const products = [
        {
            id: 1,
            title: 'Playstation 5',
            price: '550.00',
            thumbnail: '/pectures/PS5.png',
            prod:'/Prod1'
        },
        {
            id: 2,
            title: 'CD Fifa 2023 PS5',
            price: '49.00',
            thumbnail: '/pectures/cd-fifa.jpg',
            prod:'/Prod2'
        },
        {
            id: 3,
            title: 'CD Fortnite 2023 PS5',
            price: '39.00',
            thumbnail: '/pectures/cd-fortnite.jpg',
            prod:'/Prod3'
        },
        {
            id: 4,
            title: 'Manette PS5',
            price: '50.00',
            thumbnail: '/pectures/manette.png',
            prod:'/Prod4'
        },
        {
            id: 5,
            title: 'PC-Gamer intel i9',
            price: '2550.00',
            thumbnail: '/pectures/pc.jpg',
            prod:'/Prod5'
        },     
        {
            id: 6,
            title: 'Chaise-gaming ',
            price: '300.00',
            thumbnail: '/pectures/Chaise-gaming.jpg',
            prod:'/Prod6'
        },      
         {
            id: 7,
            title: 'Clavier-Gaming',
            price: '50.00',
            thumbnail: '/pectures/clavier-gamer.png',
            prod:'/Prod7'
        },

          {
            id: 8,
            title: 'Bureau-Gaming',
            price: '389.00',
            thumbnail: '/pectures/bureau-gamer.jpg',
            prod:'/Prod8'
        },
    ];
    function Product(props) {
        const { title, price, thumbnail,prod} = props;
        return (
            <div className="col-12 col-md-3 ">
                <div className="card shadow-sm box">
                  <img className="bd-placeholder-img card-img-top" src={thumbnail} alt="" />
                    <div className="card-body">
                        <p className="card-title">{title}</p>
                        <p className="card-text">{FormatCurrency(price)}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" 
                                className="btn btn-sm btn-outline-secondary">
                                    <Link to={prod} className="Link2 test-secondar">Add to cart</Link>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    function Products() {
        return (

                <main className="container">
                    <h1 className="text-white titr">RECENT BEST SELLERS</h1>
                    <div className="row owenoo mb-2">
                        {products.map((product) => (
                            <Product key={product.id}
                             title={product.title}
                              price={product.price} 
                              thumbnail={product.thumbnail}
                              prod={product.prod}
                             />
                        ))}
                    </div>
                </main>

        )
    }


export default Products