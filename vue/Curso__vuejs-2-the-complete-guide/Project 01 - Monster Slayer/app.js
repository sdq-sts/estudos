const app = new Vue({
  el: '#app',
  data: {
    gameStarted: false,
    playerHealth: 100,
    monsterHealth: 100,
    dmgLog: [],
    dmg: {}
  },

  methods: {

    reset() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.dmg = {}
      this.dmgLog = []
      this.gameStarted = false
    },

    hasWinner() {
      if(this.monsterHealth < 1) {
        alert('You win')
        this.reset()
      } else if (this.playerHealth < 1) {
        alert('You lose')
        this.reset()
      }
    },

    pushDmg() {
      this.dmgLog.unshift(this.dmg)
      this.dmg = {}
    },

    damagePlayer() {
      let dmg = Math.floor(Math.random() * 15)

      this.playerHealth -= dmg
      this.dmg.player = dmg
    },

    healPlayer() {
      let healing = Math.floor(Math.random() * 25)

      this.playerHealth + healing > 100 ? this.playerHealth = 100 : this.playerHealth += healing
      this.dmg.healing = healing
      this.damagePlayer()
      this.pushDmg()
    },

    damageMonster(i) {
      let m = i || 1
      let dmg = Math.floor(Math.random() * 15 * m)

      this.monsterHealth -= dmg
      this.dmg.monster = dmg
    },

    playerSpecialAttack() {
      this.damageMonster(1.5)
      this.damagePlayer()
      this.pushDmg()
      this.hasWinner()
    },

    attack() {
      this.damageMonster()
      this.damagePlayer()
      this.pushDmg()
      this.hasWinner()
    }

  }
})
