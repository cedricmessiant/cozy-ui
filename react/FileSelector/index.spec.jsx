import React from 'react'

import FileSelector from './index'

describe('FileSelector component', () => {
  const processSelectedSpy = jest.fn()
  const pic1 = new File(['aaaa'], 'pic1.jpg')
  const pic2 = new File(['bbbb'], 'pic1.jpg')

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should render a file selector', () => {
    const component = shallow(
      <FileSelector
        renderContent={() => <span>Click me</span>}
        processSelected={processSelectedSpy}
      />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render a default file selector', () => {
    const component = shallow(
      <FileSelector hidden={false} processSelected={processSelectedSpy} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render a disabled file selector', () => {
    const component = shallow(
      <FileSelector
        disabled
        renderContent={() => <span>Click me</span>}
        processSelected={processSelectedSpy}
      />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should pass props to the input', () => {
    const component = shallow(
      <FileSelector
        accept="image/*"
        renderContent={() => <span>Click me</span>}
        processSelected={processSelectedSpy}
      />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should process selected file on change', () => {
    const filelist = [pic1]
    const component = shallow(
      <FileSelector
        accept="image/*"
        renderContent={() => <span>Click me</span>}
        processSelected={processSelectedSpy}
      />
    )
    component.find('input').simulate('change', {
      target: {
        files: filelist
      }
    })
    expect(processSelectedSpy).toHaveBeenCalledWith(pic1)
  })

  it('should process selected files on change if it is multiple', () => {
    const filelist = [pic1, pic2]
    const component = shallow(
      <FileSelector
        accept="image/*"
        multiple
        renderContent={() => <span>Click me</span>}
        processSelected={processSelectedSpy}
      />
    )
    component.find('input').simulate('change', {
      target: {
        files: filelist
      }
    })
    expect(processSelectedSpy).toHaveBeenCalledWith([pic1, pic2])
  })
})
