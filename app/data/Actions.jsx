import NumberDispatcher from "./NumberDispatcher.jsx";

const Actions = {
    editItem(text) {
        NumberDispatcher.dispatch({
            text
        });
    }
};

export default Actions;