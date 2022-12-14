import { useState } from 'react'
import { useParams } from "react-router-dom";
import './style.scss'
import { Lesson07ProductCard } from '../../components/Lesson07ProductCard'

export function Lesson07Exercise() {

    // const { id } = useParams()

    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ])

    const newProduct = {
        id: 4,
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function addNewProduct() {

        setAllProducts([...allProducts, newProduct])

    }

    return (

        <main className="setima-aula-exercicio-component">

            <div className="title-wrapper">
                <h1>Produtos</h1>
                <button onClick={addNewProduct}>Adicionar novo produto</button>
            </div>

            <section className='products'>
                {
                    allProducts.map(
                        product => {
                            return (
                                <Lesson07ProductCard
                                    productData={product}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

    )

}