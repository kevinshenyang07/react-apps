import React from 'react';
import logo from './logo.svg';
import './App.css';

import TreeNode from './feature/TreeNode';
import mockData from './feature/mockData';
import './feature/TreeNode.css';


class App extends React.Component {
  render() {

    const tree1 = mockData.mock1.map(child => {
      return <TreeNode key={child.id} data={child} />;
    });

    const tree2 = mockData.mock2.map(child => {
      return <TreeNode key={child.id} data={child} />;
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <h2>Category tree</h2>
        <div className='tree-view'>
          {tree1}
        </div>

        <h2>Data tree</h2>
        <div className='tree-view'>
          {tree2}
        </div>
      </div>
    );
  }
}

export default App;
