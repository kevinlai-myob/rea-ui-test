import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

const handleOnClick = jest.fn();
const mockListType = "results";
const mockProperty = {
    price: "$726,500",
    agency: {
        brandingColors: {
            primary: "#ffe512"
        },
        logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"
    },
    id: "1",
    mainImage: "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
}

describe('PropertyCard', () => {
    test('renders page', () => {
        render(<PropertyCard property={mockProperty} handleOnClick={handleOnClick} listType={mockListType}/>);
        screen.debug();
    });
    test('property card data', () => {
        let {container} = render(<PropertyCard property={mockProperty} handleOnClick={handleOnClick} listType={mockListType}/>)
        expect(container.getElementsByClassName('ui image')[1]).toHaveAttribute('src',mockProperty.agency.logo);
        expect(container.getElementsByClassName('image')[2].firstChild).toHaveAttribute('src', mockProperty.mainImage);
        expect(container.getElementsByClassName('header')[0]).toHaveTextContent(`Property ID: ${mockProperty.id}`)
        expect(container.getElementsByClassName('description')[0]).toHaveTextContent(`Price: ${mockProperty.price}`)
    });
    test('on click add', () => {
        let {container} = render(<PropertyCard property={mockProperty} handleOnClick={handleOnClick} listType={mockListType}/>)
        fireEvent.click(container.getElementsByClassName('ui massive icon button')[0]);
        expect(handleOnClick).toBeCalledWith(mockProperty.id,mockListType);
    });
});