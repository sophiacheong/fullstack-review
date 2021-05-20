import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map((item, index) => (
      <div>
        <a href={item.html_url} target="_blank">{item.name}</a>
      </div>
    ))}
  </div>
)

export default RepoList;