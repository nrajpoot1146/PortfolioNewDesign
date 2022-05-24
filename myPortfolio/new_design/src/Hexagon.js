import { Component } from "react";

class Hexagon extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (<svg
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            version="1.1"
            id={this.props.id}
            xmlns="http://www.w3.org/2000/svg">
            <defs
              id="defs4128" />
            <g
              id="layer1">
              <path
                id="path763-3-0-4-4-9-0"
                d="m -95.176241,-288.32801 -166.902909,53.94304 -130.16749,-117.57064 36.73541,-171.51368 166.90291,-53.94304 130.167493,117.57064 z"
                transform="matrix(-0.27722953,0.05940326,-0.05940326,-0.27722953,-36.58366,-49.140961)" />
            </g>
          </svg>);
    }
}

export default Hexagon;