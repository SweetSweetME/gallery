import React from 'react';
import { ThemeConsumer } from '../../context';

export default class Card extends React.Component {
    render() {
        return (
            <ThemeConsumer>
                {
                    theme => (
                        <article>
                            <h1 style={{ color: theme.themeColor }}>卡片</h1>
                        </article>
                    )
                }
            </ThemeConsumer>
        );
    }
}