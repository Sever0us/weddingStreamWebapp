import React, {Component} from 'react'
import moment from 'moment'
import styled from 'styled-components'

const CountDownDiv = styled.div`
    margin: auto;
    font-size: xx-large;
    text-align:center;
    @media screen and (max-width: 900px){
        margin-top:1.5rem;
        margin-bottom:1.5rem;
        font-size:1.5rem;
    }
`


class CountDown extends Component{
    // Statefull component to allow efficient re-render of countdown
    state = {
        now: moment.now()
    }

    componentDidMount(){
        // Set polling interval for updating time state
        setInterval(()=>this.setState({now:moment.now()}), 1000)
    }

    renderTime = () => {
        // Use moment.js to render human readable fuzzy time
        const startTime = moment('2018-08-17T13:50:00+10:00')
        var duration = moment.duration(startTime.diff(this.state.now));

        /* Override output after deadline to avoid funny time 
           e.g. 'stream starting a few seconds ago' */
        return duration._milliseconds <= 0 ? 'soon' : startTime.fromNow()
    }

    render(){
        return <CountDownDiv style={this.props.style}>
            Live stream of the ceremony starting {this.renderTime()}
        </CountDownDiv>
    }
}

export default CountDown