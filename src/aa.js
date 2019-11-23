import React from 'react';
import HOC from './hoc';
import { Img } from 'COMP';
export class AA extends React.Component {
    render() {
        return (
            HOC(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    _limit: 10,
                    page: 2
                }
            )(Img)
        );
    }
}