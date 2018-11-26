import { expect } from 'chai'
import { sum, division, subtraction, multiplication } from '../src/main'

describe('Calc', () => {
  // Smoke tests
  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist
      expect(sum).to.be.a.function
    })

    it('should exist the method `division`', () => {
      expect(division).to.exist
      expect(division).to.be.a.function
    })

    it('should exist the method `subtraction`', () => {
      expect(subtraction).to.exist
      expect(subtraction).to.be.a.function
    })

    it('should exist the method `multiplication`', () => {
      expect(multiplication).to.exist
      expect(multiplication).to.be.a.function
    })
  })

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4)
    })

    it('should return 10 when `sum(5,5)`', () => {
      expect(sum(5, 5)).to.be.equal(10)
    })
  })

  describe('Division', () => {
    it('should return 2 when `division(4,2)`', () => {
      expect(division(4, 2)).to.be.equal(2)
    })

    it('should return 5 when `division(10,2)`', () => {
      expect(division(10, 2)).to.be.equal(5)
    })

    it('should return `error` when `division(10,0)`', () => {
      expect(division(10, 0)).to.be.equal('error')
    })
  })

  describe('Subtraction', () => {
    it('should return 3 when `sum(6,3)`', () => {
      expect(subtraction(6, 3)).to.be.equal(3)
    })

    it('should return -10 when `subtraction(10,20)`', () => {
      expect(subtraction(10, 20)).to.be.equal(-10)
    })
  })

  describe('Multiplication', () => {
    it('should return 4 when `multiplication(2,2)`', () => {
      expect(multiplication(2, 2)).to.be.equal(4)
    })

    it('should return -25 when `multiplication(5,5)`', () => {
      expect(multiplication(-5, 5)).to.be.equal(-25)
    })
  })
})
