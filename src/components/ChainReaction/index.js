import React from 'react';

export default class ChainReaction extends React.Component {

    CITY = {
        1: '北京',
        2: '天津',
        3: '上海',
        4: '重庆'
    }

    AREA = {
        1: ['北京-区1', '北京-区2', '北京-区3', '北京-区4', '北京-区5'],
        2: ['天津-区1', '天津-区2', '天津-区3', '天津-区4', '天津-区5'],
        3: ['上海-区1', '上海-区2', '上海-区3', '上海-区4', '上海-区5'],
        4: ['重庆-区1', '重庆-区2', '重庆-区3', '重庆-区4', '重庆-区5'],
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedCity: 4
        }
    }

    selectChange = (event) => {
        console.log(event.target.value);
        this.setState({
            selectedCity: event.target.value
        });
    }

    render() {
        const { CITY, AREA, state: { selectedCity } } = this;
        return (
            <div>
                <select defaultValue={selectedCity} onChange={() => { this.selectChange(event) }}>
                    {LO.map(CITY, (value, key) => <option key={key} value={key}>{value}市</option>)}
                </select>

                <select>
                    {LO.map(LO.get(AREA, selectedCity, []), (value, key) => <option key={key} value={key}>{value}</option>)}
                </select>
            </div>
        );
    }
}