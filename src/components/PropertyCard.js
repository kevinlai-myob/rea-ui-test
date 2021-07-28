import React from 'react';
import {Button, Card, Icon, Image} from "semantic-ui-react";

const PropertyCard = ({property, listType, handleOnClick}) => {
    return(
        <Card>
            <Image size='small'>
                <Image src={property.agency.logo} />
            </Image>
            <Image src={property.mainImage} wrapped ui={false}/>
            <div className="add_button hover">
                <Button icon size="massive" onClick={() => handleOnClick(property.id, listType)}>
                    <Icon name={listType==="results"?"add":"trash"}/>
                </Button>
            </div>

            <Card.Content>
                <Card.Header>Property ID: {property.id}</Card.Header>
                <Card.Description>Price: {property.price}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default PropertyCard;