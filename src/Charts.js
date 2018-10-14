import React from 'react'
import PieChart from "react-svg-piechart"
import ReactBasicTable from 'react-basic-table'
import {gradient} from "./utils";

class Charts extends React.Component {
    constructor () {
        super()

        this.state = {
            data: {},
            language: {},
            intent: {}
        }
    }
    componentDidMount () {
        // hacky removal of stupid paginator
        const rows = document.getElementsByClassName('row')
        rows[1].remove()
        rows[2].remove()

        fetch('https://ff27hmb1td.execute-api.us-east-2.amazonaws.com/prod/items')
            .then(res => res.json())
            .then(data => {
                this.mapData(data)
            })
    }

    mapData = (data) => {
        // const { data } = this.state
        const language = {}
        const intent = {}

        data.forEach(d => {
            if (language[d.language] === undefined) {
                language[d.language] = 1
            } else {
                language[d.language]++
            }
            if (intent[d.intent] === undefined) {
                intent[d.intent] = 1
            } else {
                intent[d.intent]++
            }
        })

        this.setState({
            language,
            intent
        })
    }

    getPieChartData() {
        const {language, intent} = this.state;
        const uniqueLanguages = Object.keys(language);
        const languageColors = gradient("#22594e", "#a1d9ce", uniqueLanguages.length);

        const uniqueIntents = Object.keys(intent);
        const intentColors = gradient("#22594e", "#a1d9ce", uniqueLanguages.length);

        let languageData = [];
        uniqueLanguages.forEach((key, i) => {
            languageData.push({
                title: key,
                value: language[key],
                color: languageColors[i]
            })
        });

        let intentData = [];
        uniqueIntents.forEach((key, i) => {
            intentData.push({
                title: key,
                value: intent[key],
                color: intentColors[i]
            })
        });

        return {languageData, intentData};
    }

    render () {
        const styles = {
            table: {
                display: 'inline-block',
                minHeight: '20px',
                background: '#EBE7E7',
                borderRadius: '5px',
                padding: '5px',
                position: 'relative',
                bottom: '100px',
                left: '300px',
            }
        };

        const languageColumns = ['Language', '#']
        const languageRows = [
            [
                <span className='table-left-column'>english</span>,
                <span>4</span>
            ],
            [
                <span className='table-left-column'>english</span>,
                <span>4</span>
            ]
        ]
        const categoryColumns = ['Category', '#']
        const categoryRows = [
            [
                <span className='table-left-column'>Childcare</span>,
                <span>4</span>
            ],
            [
                <span className='table-left-column'>Citizenship Classes</span>,
                <span>4</span>
            ],
            [
                <span className='table-left-column'>English Classes</span>,
                <span>4</span>
            ],
            [
                <span className='table-left-column'>Enroll School</span>,
                <span>4</span>
            ],
            [
                <span className='table-left-column'>Housing</span>,
                <span>4</span>
            ],
            [
                <span className='table-left-column'>Immigration Law</span>,
                <span>4</span>
            ],
            [
                <span className='table-left-column'>Job Assistance</span>,
                <span>4</span>
            ]
        ]

        const {languageData, intentData} = this.getPieChartData();


        return (
            <div className='charts-container'>
                <div className='chart'>
                    <PieChart
                        data={languageData}
                        // If you need expand on hover (or touch) effect
                        expandOnHover
                        // If you need custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            if (d) {
                                console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            } else {
                                console.log("Mouse leave - Index:", i, "Event:", e)
                            }
                        }}
                    />
                    <div style={styles.table}>
                        <ReactBasicTable rows={languageRows} columns={languageColumns} className="react-basic-table" />
                    </div>
                </div>
                <div className='chart'>
                    <PieChart
                        data={intentData}
                        // If you need expand on hover (or touch) effect
                        expandOnHover
                        // If you need custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                            if (d) {
                                console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            } else {
                                console.log("Mouse leave - Index:", i, "Event:", e)
                            }
                        }}
                    />
                    <div style={styles.table}>
                        <ReactBasicTable rows={categoryRows} columns={categoryColumns} className="react-basic-table" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Charts
