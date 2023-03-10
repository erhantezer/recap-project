import React from 'react'
import { useGlobalContext } from '../context/context'

const taxRate = 0.18;
const shipping = 25;

const CardTotal = () => {
    const {products} = useGlobalContext();

    const subTotal = products.reduce((acc, product) => product.price * product.amount * product.dampingRate + acc, 0);
    console.log(subTotal);

    return (
        <table className="table w-100">
            <tbody>
                <tr className='text-end'>
                    <th >1</th>
                    <td>

                    </td>
                    
                </tr>
                <tr>
                    <th >2</th>
                    <td>

                    </td>
                    
                </tr>
                <tr>
                    <th >3</th>
                    <td >

                    </td>
                    
                </tr>
                <tr>
                    <th >3</th>
                    <td >
                        
                    </td>
                    
                </tr>
            </tbody>
        </table>
    )
}

export default CardTotal