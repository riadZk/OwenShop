import React from "react";
import './Accesoire.css';
import { Link } from "react-router-dom";
import FormatCurrency from "../FormatCurrency";
    const accessoire = [
        {
            id: 1,
            title: 'Skin Playstation',
            price: '23.99',
            thumbnail: '/pectures/skin-play.jpg',
            aces:'Aces'
        },
        {
            id: 2,
            title: 'Casque ',
            price: '55.00',
            thumbnail: '/pectures/casque-gamer.jpg',
            aces:'Aces2'
        },
        {
            id: 3,
            title: 'MicroPhone',
            price: '45.00',
            thumbnail: '/pectures/micro.jpg',
            aces:'Aces3',
        },
        {
            id: 4,
            title: 'Cable manette ',
            price: '9.99',
            thumbnail: '/pectures/cable-original.jpg',
            aces:'Aces4'
        },
    
    ];
    function Product(props) {
        const { title, price, thumbnail ,aces} = props;
        return (
            <div className="col">
                <div className="card shadow-sm box">
                  <img className="bd-placeholder-img card-img-top" src={thumbnail} alt="" />
                    <div className="card-body">
                        <p className="card-title">{title}</p>
                        <p className="card-text">{FormatCurrency(price)}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" 
                                className="btn btn-sm btn-outline-secondary">
                                    <Link to={aces} className="Link2 test-secondar">Add to cart</Link>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    function Accessoire() {
        return (

                <main className="af ">
                    <h1 className="text-white tite">Accessoire gaming</h1>
                    <div className="row owenoo mb-2">
                        {accessoire.map((product) => (
                            <Product 
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                thumbnail={product.thumbnail}
                                aces={product.aces}
                             />
                        ))}
                    </div>
                </main>

        )
    }

export default Accessoire;