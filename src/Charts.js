import React from 'react'
import { Chart, Axis, Series, Tooltip, Cursor, Pie } from 'react-charts'
import ReactBasicTable from 'react-basic-table'

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

    render () {
        const { language, intent } = this.state
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
        }
        let languageChartData = [[0,2], [6,5]]
        // Object.keys(language).forEach((key, i) => {
        //     languageChartData.push([i, language[key]])
        // })
        // if(!languageChartData.length) {
        //     console.log('none')
        //     languageChartData = [[0,2]]
        // }
        console.log(languageChartData)
        const languageData = [
            {
                label: "Series 2",
                data: languageChartData
            }
        ]
        const catagoryData = [
            {
                label: "Series 2",
                data: [[0, 5], [0, 6], [0, 4]]
            }
        ]
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

        return (
            <div className='charts-container'>
                <div className='chart'>
                    <Chart data={languageData}>
                      <Axis type='pie' />
                      <Series type={Pie} showPoints={true} />
                      <Tooltip />
                    </Chart>
                    <div style={styles.table}>
                        <ReactBasicTable rows={languageRows} columns={languageColumns} />
                    </div>
                </div>
                <div className='chart'>
                    <Chart data={catagoryData}>
                      <Axis type='pie' />
                      <Series type={Pie} showPoints={true} />
                    </Chart>
                    <div style={styles.table}>
                        <ReactBasicTable rows={categoryRows} columns={categoryColumns} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Charts
