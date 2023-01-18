import './App.css';
import React from 'react';
import ListItems from './Components/ListItems.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import FlipMove from 'react-flip-move';
library.add(faTrash);

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== '') {
      const newitems = [...this.state.items, newItem];
      this.setState({
        items: newitems,
        currentItem: {
          text: '',
          key: '',
        },
      });
    }
  }

  deleteItem(key) {
    const filterItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filterItems });
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item)=>{
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({ item: items });
  }

  render() {
    return (
      <div className="App">
        <h2>TODO LIST</h2>
        <header>
          <form id="todoForm" onSubmit={this.addItem}>
            <input
              type="text"
              value={this.state.currentItem.string}
              placeholder="Enter Task"
              onChange={this.handleInput}
            />
            <button type="submit">ADD</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
          // handleEdit = {handleEdit}
        ></ListItems>
      </div>
    );
  }
}

export default App;
