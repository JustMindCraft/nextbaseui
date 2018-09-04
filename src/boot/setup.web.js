import React, { Component } from "react";
import { StyleProvider } from "native-base";

import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import HomeRoot from "./HomeRoot";
import './mine.js'

export default class Setup extends Component {
  componentDidMount(){
    document.getElementById('root').firstChild.lastChild.style.display = 'none'
    console.log('执行了');
    
  }
  render() {
    return (
      <StyleProvider style={getTheme(variables)} >
        <HomeRoot />
      </StyleProvider>
    );
  }
}