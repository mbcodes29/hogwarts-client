import React from 'react';
import ReactDOM from 'react-dom';
import CreatePageForm from './CreatePageForm'
import {BrowserRouter} from 'react-router-dom'
import renderer from "react-test-renderer"

it('renders without crashing',() => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <CreatePageForm />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><CreatePageForm /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });