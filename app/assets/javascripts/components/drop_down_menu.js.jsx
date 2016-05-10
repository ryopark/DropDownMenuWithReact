var DropDownMenu = React.createClass({
  getInitialState: function() {
    return {
    focused: false
    }
  },
  showMenu: function(event) {
    this.setState( {focused: !this.state.focused});
  },
  menu: function() {
    if (this.state.focused) {
      return (
        <ul className='list-group'>
          <li className='list-group-item'>
            <a href='/tweets'>tweets</a>
          </li>
        </ul>
      );
    }
  },
  render: function() {
    return (
      <div>
        <button className='btn btn btn-primary' onClick={this.showMenu}>menu</button>
        <div>{this.menu()}</div>
      </div>
    );
  }
});
