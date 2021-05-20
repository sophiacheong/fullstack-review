import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const url = 'http://127.0.0.1:1128/repos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: (res) => {
        this.setState({ repos: res })
      },
      error: (err) => { console.error(err); }
    })
  }

  search (term) {
    $.post(url, { username: term }, (res) => {
      $.get(url, (res) => {
        this.setState({ repos: res })
      })
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));