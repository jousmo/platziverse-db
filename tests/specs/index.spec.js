const { exponentByTwo } = require('../../index')
const { expect } = require('chai')

describe('Example Unit Test', function () {
  it('Is true', function () {
    const result = exponentByTwo(2)
    expect(result).to.equals(4)
  })
})
