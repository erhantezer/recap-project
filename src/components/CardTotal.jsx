import React from 'react'
import { useGlobalContext } from '../context/context'

const CardTotal = () => {
    const {products} = useGlobalContext();

    return (
        <table class="table">
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    
                </tr>
            </tbody>
        </table>
    )
}

export default CardTotal