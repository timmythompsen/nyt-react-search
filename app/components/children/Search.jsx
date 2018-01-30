var React = require("react");
var helpers = require("../utils/helpers.js");
var Search = React.createClass({

  
  getInitialState: function() {
    return {
      arrayOfArticles: []
    };
  },

  _handleSave: function(event){

    var articleId = event.target.value;

    
    var saveArticleObj;
    for(var i=0; i<this.state.arrayOfArticles.length; i++){
      if(this.state.arrayOfArticles[i].id == articleId){
        saveArticleObj = this.state.arrayOfArticles[i];
      }
    }

    var that = this;
    helpers.apiSave(saveArticleObj).then(function(){
      helpers.apiGet().then(function(query){
        that.props._resetMongoResults(query.data);
      });
    }.bind(this))

  },

  render() {
    var that = this;
    return (

      <div className="panel panel-default" style= { {backgroundColor: "#F5F5DC", borderStyle: "solid", borderWidth: "1px"} }>

        <div className="panel-heading" style= { {backgroundColor: "#DEB887"} }>
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Results</b></i></h3>
        </div>

        <div className="panel-body">
          <ul className="list-group col-md-8 col-md-offset-2">
            {this.props.apiResults.map(function(search, i) {

              that.state.arrayOfArticles.push({
                id: search._id,
                title: search.headline.main,
                date: search.pub_date,
                url: search.web_url
              });

              return (
                <li key={search._id} className="list-group-item" style={ {borderWidth: "0px"} }>
                  <div className="input-group">
                    <div type="text" className="form-control">
                      <b><a href={search.web_url} target="_new" style={ {color: "black"} }>{search.headline.main}</a></b>
                      <i> {search.pub_date.substring(0, 10)}</i>
                    </div>       
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button" onClick={that._handleSave} value={search._id}>Save</button>
                    </span>
                  </div>
                </li>
              );
            })}

          </ul>
        </div>
      </div>

    );
  }
});

module.exports = Search;
