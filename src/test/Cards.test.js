import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import Cards from '../components/Cards';

describe('Cards', () => {
    test('renders page', () => {
        render(<Cards/>);
        screen.debug();
    });
    test('cards', async() => {
        let {container, getByText} = render(<Cards/>)
        await waitFor(() => expect(getByText(/Results/)).toBeInTheDocument());
        expect(container.getElementsByClassName('ui three cards')[0].children.length).toEqual(3);
        expect(container.getElementsByClassName('ui three cards')[1].children.length).toEqual(1);
    });
});



