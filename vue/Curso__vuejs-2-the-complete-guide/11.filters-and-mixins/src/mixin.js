export default {
  computed: {
    mixinReversedText() {
      return this.text.split('').reverse().join('')
    },

    mixinCountedText() {
      return this.text + ` (${ this.text.length })`
    }
  }
}
