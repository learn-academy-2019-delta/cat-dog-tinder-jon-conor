import React from 'react'
// import App from './App';
import ReactDOM from 'react-dom'
import Cats from '../pages/Cats'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const cats = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    enjoys: "Long walks on the beach."
  },
  {
    id: 2,
    name: 'Paws',
    age: 4,
    enjoys: "Snuggling by the fire."
  },
  {
    id: 3,
    name: 'Mr. Meowsalot',
    age: 12,
    enjoys: "Being in charge."
},
{
    id: 4,
    name: 'Rusty',
    age: 22,
    enjoys: "Laying around."
},
{
    id: 5,
    name: 'Garfield',
    age: 7,
    enjoys: "Eating Lasagna."
},
{
    id: 6,
    name: 'Raisins',
    age: 11,
    enjoys: "Belly rubs."
},
{
    id: 7,
    name: 'Snickers',
    age: 5,
    enjoys: "Bringing my owner dead animals."
},
{
    id: 8,
    name: 'Tinkerbell',
    age: 21,
    enjoys: "Drinking warm milk."
},
{
    id: 9,
    name: 'Kitty',
    age: 13,
    enjoys: "Playing with ball of yarn."
},
{
    id: 10,
    name: 'Roger',
    age: 9,
    enjoys: "Laying by the pool."
}
]


it('Cats renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cats cats={cats}/>, div)
});

// it('Renders the cats', ()=>{
//   const component = mount(<Cats cats={cats} />)
//   const headings = component.find('h4 > .cat-name')
//   expect(headings.length).toBe(10)
// })
