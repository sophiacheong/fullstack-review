import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

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
      url: 'http://127.0.0.1:1128/repos',
      dataType: 'json',
      success: (res) => {
        this.setState({ repos: res }, () => console.log(this.state.repos))
      },
      error: (err) => { console.error(err); }
    })
  }

  search (term) {
    // $.ajax({
    //   type: 'POST',
    //   url: 'http://127.0.0.1:1128/repos',
    //   contentType: 'application/json',
    //   data: JSON.stringify({username: `${term}`}),
    //   success: () => { console.log('Success!'); },
    //   error: (err) => { console.error(err); }
    // })
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:1128/repos',
      data: { username: term },
      success: (data, textStatus, jqXHR) => { console.log('Sucess!'); },
      error: (request, err, errorThrown) => { console.error(errorThrown); }
    })
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