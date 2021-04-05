import React, { createContext, Component } from "react";

export const AppContext = createContext([]);
export default class AppContextProvider extends Component {
    state = {
        leftNavMenus: [],
        setLeftNavMenus: (menus) => {
            this.setState({leftNavMenus: menus});
        },
        toggleLeftNav: false,
        setToggleLeftNav: ( value ) => {
            this.setState({toggleLeftNav: value});
        },
        previousState: undefined
    };
    

    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
