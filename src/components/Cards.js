import React, { useState } from 'react'
import data from '../data.json'
import {Card, Image, Button, Icon, Container} from 'semantic-ui-react'
import '../App.css';
import PropertyCard from "./PropertyCard";


const Cards = () => {
    const [properties, setProperties] = useState(data)
    const handleOnClick = (id, listType) => {
        const {results, saved} = properties;
        let temp_results = [...results]
        let temp_saved = [...saved]
        if(listType === 'results') {
            temp_saved.push(temp_results.find(property => property.id === id))
            temp_results = temp_results.filter(property => property.id !== id)
        }else{
            temp_results.push(temp_saved.find(property => property.id === id))
            temp_saved = temp_saved.filter(property => property.id !== id)
        }
        setProperties({results:temp_results,saved:temp_saved})
    }
    return (
        <Container>
            <h1>Results</h1>
            <Card.Group itemsPerRow={3}>
            {
                properties.results.map((result, index) => (
                    <PropertyCard key={index} property={result} listType='results' handleOnClick={handleOnClick}/>
                )
            )}
            </Card.Group>
            <h1>Saved</h1>
            <Card.Group itemsPerRow={3}>
            {
                properties.saved.map((result, index) => (
                    <PropertyCard key={index} property={result} listType='saved' handleOnClick={handleOnClick}/>
                )
            )}
            </Card.Group>
        </Container>
        )
}

export default Cards