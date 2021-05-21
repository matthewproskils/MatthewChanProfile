import Tilt from "react-parallax-tilt";
import React from "react";

export default class Grid extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
      <div style={{"background-color": this.props.color}} class="grid-el">
        <div style={{fontSize: "7vh"}}>
          {this.props.top}
        </div>
        <div style={{fontSize: "4vh"}}>
          {this.props.bottom}
        </div>
      </div>
    </Tilt>
  }
}