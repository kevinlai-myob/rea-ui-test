import React, { Component } from 'react'
import data from '../data.json'
import { Card } from 'semantic-ui-react'


const TestComponent = () => {

return (
    <div>
        {
        data.results.map((result, index) => (

            <Card key={index}>
                <Card.Content>
                    <Card.Header>{result.id}</Card.Header>
                    <Card.Description>{result.price}</Card.Description>
                </Card.Content>
            </Card>
        )
        )}
    </div>
    )
}



export default TestComponent