import React from 'react';


class TreeNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    let subtree = null;

    const { children } = this.props.data;
    if (children) {
      subtree = children.map(child => {
        return <TreeNode key={child.id} data={child} />;
      });
    }

    let containerClassName = 'tree-node-children';
    if (this.state.collapsed) {
      containerClassName += ' tree-node-children-collapsed';
    }

    if (subtree) {
      return (
        <div className="tree-node">
          <a data-id={this.props.data.id} onClick={this.handleClick}>
            {this.props.data.name}
          </a>
          <div className={containerClassName}>
            {subtree}
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="tree-node-leaf">
          <a data-id={this.props.data.id}>
            {this.props.data.name}
          </a>
        </div>
      );
    }
  }
}

export default TreeNode;