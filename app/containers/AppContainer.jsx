import AppView from "../views/AppView.jsx";
import { Container } from "flux/utils";
import React from "react";
import NumberStore from "../data/NumberStore.jsx";
import Actions from "../data/Actions.jsx";

class AppContainer extends React.Component {
    static getStores() {
        return [NumberStore];
    }
    static calculateState(prevState) {
        return {
            Number: NumberStore.getState(),
            onEditItem: Actions.editItem
        };
    }
    render() {
        return (
            <div style={{margin:'150px'}}>
            <h1>Введите число до 100 000:</h1>
            <AppView Number={this.state.Number}
                onEditItem={this.state.onEditItem} />
                </div>
        );
    }
}
export default Container.create(AppContainer);