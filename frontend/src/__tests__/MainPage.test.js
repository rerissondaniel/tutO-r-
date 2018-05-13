import React from 'react'
import { shallow } from 'enzyme'

import MainPage from '../components/MainPage'

describe('<MainPage /> component.', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MainPage />)
  })

  it('should render and not break', () => {
    expect(wrapper).toBeTruthy()
  })
})