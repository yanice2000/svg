import React, { Component } from "react";
import ReactDOM from "react-dom";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE } from "react-svg-pan-zoom";
import { AutoSizer } from "react-virtualized";
import "./styles.css";

class App extends Component {
  state = { tool: TOOL_NONE, value: INITIAL_VALUE };
  Viewer = null;

  componentDidMount() {
    console.log("componenet did mount");
    // setTimeout(() => {
    //   this.Viewer.fitToViewer();
    // }, 100);
  }

  changeTool(nextTool) {
    console.log("change tool");

    this.setState({ tool: nextTool });
  }

  changeValue(nextValue) {
    console.log("change val");

    this.setState({ value: nextValue });
  }

  handleClick(filter) {
    console.log("handle click");

    this.setState({ selected: filter });
  }

  isActiveRoom(value) {
    console.log("is active room");

    return "floorplan__room " + (value === this.state.selected ? "active" : "");
  }

  isActiveList(value) {
    console.log("is active list");

    return value === this.state.selected ? "active" : "";
  }

  render() {
    return (
      <div className="container">
        <div className="item floorplan">
          <div style={{ width: "100%", height: "100%" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 496.5 640.5"
            >
              <polygon
                onClick={this.handleClick.bind(this, "gravity-0-029")}
                className={this.isActiveRoom("gravity-0-029")}
                points="109.31 187.38 108.63 205 22 205 22 8 143 8 143 152.32 109.31 187.38"
              />
              <rect
                onClick={this.handleClick.bind(this, "gravity-0-028")}
                className={this.isActiveRoom("gravity-0-028")}
                class="cls-2"
                x="59.28"
                y="205"
                width="50.03"
                height="54.87"
              />
              <polygon
                onClick={this.handleClick.bind(this, "gravity-0-027")}
                className={this.isActiveRoom("gravity-0-027")}
                class="cls-1"
                points="109.65 298.43 102.08 305.13 50.43 305.13 50.43 259.87 109.65 259.87 109.65 298.43"
              />
              <rect
                onClick={this.handleClick.bind(this, "gravity-0-026")}
                className={this.isActiveRoom("gravity-0-026")}
                class="cls-1"
                x="102.54"
                y="297.06"
                width="108.88"
                height="101.04"
              />
              <rect
                class="cls-1"
                x="211.42"
                y="325.37"
                width="47.47"
                height="43.55"
              />
              <rect
                class="cls-1"
                x="211.42"
                y="368.92"
                width="23.74"
                height="29.18"
              />
              <rect
                class="cls-1"
                x="235.47"
                y="368.92"
                width="23.42"
                height="56.34"
              />
              <rect
                class="cls-1"
                x="235.47"
                y="425.26"
                width="148.27"
                height="202.87"
              />
              <rect
                class="cls-1"
                x="294.1"
                y="368.92"
                width="89.64"
                height="56.34"
              />
              <rect
                class="cls-1"
                x="143"
                y="14.45"
                width="57.56"
                height="97.85"
              />
              <rect
                class="cls-1"
                x="200.56"
                y="81.98"
                width="53.75"
                height="61.33"
              />
              <rect
                class="cls-1"
                x="143"
                y="112.3"
                width="57.56"
                height="31.01"
              />
              <rect
                class="cls-1"
                x="200.56"
                y="14.45"
                width="53.75"
                height="30.32"
              />
              <rect
                class="cls-3"
                x="254.31"
                y="14.45"
                width="136.44"
                height="128.86"
              />
              <rect
                class="cls-3"
                x="200.56"
                y="44.77"
                width="53.75"
                height="37.21"
              />
              <polygon
                class="cls-3"
                points="294.1 368.92 294.1 425.26 235.47 425.26 235.47 368.92 258.89 368.92 258.89 325.37 211.41 325.37 210.88 312.05 193.89 297.06 109.65 297.06 109.65 205 109.31 187.38 150.79 143.31 383.74 143.31 383.74 368.92 294.1 368.92"
              />
              <rect
                class="cls-3"
                x="383.74"
                y="153.57"
                width="98.59"
                height="108.99"
              />
              <rect
                class="cls-3"
                x="235.15"
                y="368.58"
                width="23.74"
                height="56.68"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
