import React, { Component } from "react";
import _ from "lodash";

export default class Password extends Component {
  constructor(props) {
    super(props);

    this.onPwdChange = this.onPwdChange.bind(this);
    this.state = {
      strength: 0
    };
  }

  onPwdChange(event) {
    var letter = _.last(_.toArray(event.target.value));

    switch (letter) {
      case letter.toUppercase(): {
        console.log("Excellent");
        break;
      }
      case letter.toLowercase(): {
        console.log("Good");
        break;
      }
      case letter._.isNumber: {
        console.log("Fair");
        break;
      }
      case "D": {
        console.log("Poor");
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
  }

  calculateStrength(character) {}

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter password here.."
          onChange={this.onPwdChange}
        />
        <span>Strong</span>
      </div>
    );
  }
}
