import React, { Component } from "react";
import { StyleProvider } from "native-base";

import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import HomeRoot from "./HomeRoot";

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)} >
        <HomeRoot />
      </StyleProvider>
    );
  }
}