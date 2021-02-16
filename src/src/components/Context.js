import React from "react"

const defaultContextValue = {
  data: {
    someKey: "some value",
    menuOpen: false
  },
  set: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

/*
Class contents initially taken from examples in gatsby-plugin-layout
README. https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/
*/
class ContextProvider extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProvider }