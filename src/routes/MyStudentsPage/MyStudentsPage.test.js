import React from 'react';
import ReactDOM from 'react-dom';
import MyStudentsPage from './MyStudentsPage'
import {BrowserRouter} from 'react-router-dom'
import renderer from "react-test-renderer"

it('renders without crashing',() => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <MyStudentsPage />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
        <MyStudentsPage />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });