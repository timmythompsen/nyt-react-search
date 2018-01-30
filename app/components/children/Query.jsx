
var React = require("react");
var Query = React.createClass({

 
  getInitialState: function() {
    return {
      topic: "",
      startYear: "",
      endYear: ""
    };
  },

  _handleSubmit: function(event) {
    event.preventDefault();
    this.props._setSearchFeilds(this.state.topic, this.state.startYear, this.state.endYear);
  },

  _handleTopicChange: function(event) {
    this.setState({topic: event.target.value});
  },

  _handleStartYearChange: function(event) {
    this.setState({startYear: event.target.value});
  },

  _handleEndYearChange: function(event) {
    this.setState({endYear: event.target.value});
  },


  render() {
    return (

      <div className="panel panel-default" style={ {backgroundColor: "#F5F5DC", borderStyle: "solid", borderWidth: "1px"} }>

        <div className="panel-heading" style= { {backgroundColor: "#DEB887"} }>
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Search Articles</b></i></h3>
        </div>

        <div className="panel-body text-center">
          <form role="form" onSubmit={this._handleSubmit}>

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="topic" className="text-center">Topic</label>
              <input type="text" className="form-control text-center" id="topic" onChange={this._handleTopicChange} />
            </div>

            <br />

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="startYear">Start Year</label>
              <input type="text" className="form-control text-center" id="startYear" onChange={this._handleStartYearChange} />
            </div>

            <br />

            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="endYear">End Year</label>
              <input type="text" className="form-control text-center" id="endYear" onChange={this._handleEndYearChange} />
            </div>

            <br />

            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Search</button>

          </form>
        </div>

      </div>

    );
  }
});


module.exports = Query;