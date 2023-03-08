import React from "react";

class AppView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { newItem: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onInputChange(e) {
        this.setState({ newItem: e.target.value });
    }
    onClick(e) {
        if (this.state.newItem) {
            this.props.onEditItem(this.state.newItem);
            this.setState({ newItem: " " });
        }
    }

    render() {
        return (
            <div>
            <input style={{fontSize:'20px', fontWeight:'bolder',fontFamily:'Helvetica, Arial, sans-serif',borderRadius:"5px", width:'200px', height:'30px'}} type="text" value={this.state.newItem} onChange={this.onInputChange} />
            <button style={{width:'200px', height:'40px', marginLeft:'20px', borderRadius:"5px", fontSize:'17px', backgroundColor:'lightblue', fontWeight:'bold',boxShadow:'15px 15px 16px rgb(119, 109, 109)' }} onClick={this.onClick}>Перевод</button>
            <h2>Результат:</h2>
            <div style={{fontFamily:'Helvetica, Arial, sans-serif', textShadow:'rgb(118, 114, 114) 3px 2px', fontSize:'40px', fontWeight:'bolder'}}>
                {
                    this.props.Number
                }
            </div>
            </div>
            );
    }
}

export default AppView;