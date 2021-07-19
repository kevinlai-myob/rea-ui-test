import React, { Component, useState } from 'react'
import data from '../data.json'
import { Card, Image, Button, Icon } from 'semantic-ui-react'
import '../App.css';



const Cards = () => {

    return (
            <div>
                <Card.Group itemsPerRow={3}>
                {
                    data.results.map((result, index) => (
                        <Card key={index}>
                            <Image size='small'>
                                <Image src={result.agency.logo} />
                            </Image>
                            <Image src={result.mainImage} wrapped ui={false} />

                            <Button className="card_hover" icon style={{position: "absolute",top: "120px"}}>
                                <Icon name="add"/>
                            </Button>


                            <Card.Content>
                                <Card.Header>Property ID: {result.id}</Card.Header>
                                <Card.Description>Price: {result.price}</Card.Description>
                            </Card.Content>
                        </Card>
                    )
                )}
                </Card.Group>
            </div>
            )
}



export default Cards