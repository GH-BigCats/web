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
        const intentColors = gradient("#22594e", "#a1d9ce", uniqueIntents.length);

        const languageData = [], languageRows = [];
        uniqueLanguages.forEach((key, i) => {
            const value = language[key];

            if (key !== 'und') {
                languageData.push({
                    title: key,
                    value,
                    color: languageColors[i]
                });

                languageRows.push([
                    <span className='table-left-column'>{key}</span>,
                    <span>{value}</span>
                ]);
            }
        });

        const intentData = [], intentRows = [];
        uniqueIntents.forEach((key, i) => {
            const value = intent[key];

            if (key !== 'undefined') {
                intentData.push({
                    title: key,
                    value,
                    color: intentColors[i]
                });

                intentRows.push([
                    <span className='table-left-column'>{key}</span>,
                    <span>{value}</span>
                ]);
            }
        });

        return {languageData, intentData, languageRows, intentRows};
    }

    render () {
        const {languageData, intentData, languageRows, intentRows} = this.getPieChartData();

        const languageColumns = ['Language', '#'];
        const categoryColumns = ['Topics', '#'];

        return (
            <div>
                <div className={"charts-header"}>
                    <h1> Ask a question by texting ..... or .... instructions coming soon </h1>
                </div>
                <div className='charts-container'>
                    <div className='chart'>
                        <h2> Languages </h2>
                        <div data-reactroot="" style={{maxWidth: "900px", margin: "0px auto"}} >
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
                        </div>
                    </div>
                    <div className='chart'>
                        <h2> Topics </h2>
                        <div data-reactroot="" style={{maxWidth: "900px", margin: "0px auto"}} >
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
                        </div>
                    </div>
                </div>
                <div className="charts-footer">
                    <div className="charts-footer-left">
                        <div>
                        <ReactBasicTable rows={languageRows} columns={languageColumns} className="react-basic-table" />
                        </div>
                    </div>
                    <div className="charts-footer-right">
                        <ReactBasicTable rows={intentRows} columns={categoryColumns} className="react-basic-table" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Charts
