import React from 'react'
import { useGlobalContext } from '../context/context'

const CardTotal = () => {
    const {products} = useGlobalContext();

    return (
        <table class="table w-100">
            <tbody>
                <tr className='text-end'>
                    <th scope="row">1</th>
                    <td>

                    </td>
                    
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>

                    </td>
                    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">

                    </td>
                    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">
                        
                    </td>
                    
                </tr>
            </tbody>
        </table>
    )
}

export default CardTotal