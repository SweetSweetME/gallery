import React from 'react';
// import { ThemeConsumer } from '../../context';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { props: { children } } = this;
        console.log(children);
        return (
            <article>
                123
                {children}
            </article>
            // <ThemeConsumer>
            //     {
            //         theme => (
            //             <article>
            //                 <h1 style={{ color: theme.themeColor }}>卡片</h1>
            //             </article>
            //         )
            //     }
            // </ThemeConsumer>
        );
    }
}