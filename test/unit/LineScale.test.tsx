import React from 'react';
import Chance from 'chance';
import { matchers } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import LineScale from '../../src/LineScale';
import { PRIMARY_COLOR } from '../../src/variables';

expect.extend(matchers);

const chance = new Chance();

describe('<LineScale>', () => {
    afterEach(cleanup);

    test('LineScale should match snapshot', () => {
        const { container } = render(<LineScale loading={true}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('LineScale should have default color', () => {
        const { container } = render(<LineScale loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', PRIMARY_COLOR, { target: '> div' });
    });

    test('LineScale should have given color', () => {
        const color = chance.color({ format: 'hex' });
        const { container } = render(<LineScale color={color} loading={true}/>);

        expect(container.firstChild).toHaveStyleRule('background-color', color, { target: '> div' });
    });

    test('LineScale should have no children', () => {
        const { container } = render(<LineScale loading={false}/>);

        expect(container.firstChild).toBeNull();
    });

    test('LineScale should have three children', () => {
        const { container } = render(<LineScale loading={true}/>);

        expect(container.querySelectorAll('div')).toHaveLength(6);
    });
});
