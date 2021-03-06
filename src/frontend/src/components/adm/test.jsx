import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e) {
    if (e && e.target) {
      const { value } = e.target;
      const { broadcastMsg } = this.props;
      // const { text } = this.state;
      this.setState({ text: value || '' });
      broadcastMsg(value);
    }
  }
  onClick(e) {
    const { broadcastMsg } = this.props;
    this.setState({ text: '' });
    broadcastMsg('');
  }
  render() {
    // const { text } = this.state;
    const text = this.props.text;
    console.log("render", text);
    return (
      <div className="container text-left">
      <div className="row mt-1">
      <div className="col">
        <div className="form-group">
          <label >Live text:</label>
          <textarea
          className="form-control"
          id="live-text"
          value={text}
          rows="7"
          onChange={this.onChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onClick}
        >Clear</button>
      </div>
      </div>
      </div>
    )
  }
}

export default Test;
