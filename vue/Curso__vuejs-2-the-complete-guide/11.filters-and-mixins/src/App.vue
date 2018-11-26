<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>


                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <small>Exercise 1</small>
                <p>{{ text | reverseWord }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <small>Exercise 2</small>
                <p>{{ text | countChar }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <small>Exercise 3</small>
                <p>{{ reversedText }}</p>
                <p>{{ countedText }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <small>Exercise 4</small>
                <p>{{ mixinReversedText }}</p>
                <p>{{ mixinCountedText }}</p>

            </div>
        </div>
    </div>
</template>

<script>
    import mixin from './mixin.js'

    export default {
        mixins: [mixin],

        data() {
            return {
                text: 'This is a test string'
            }
        },

        filters: {
            reverseWord(value) {
                return value.split('').reverse().join('')
            }
        },

        computed: {
            reversedText() {
                return this.text.split('').reverse().join('')
            },

            countedText() {
                return this.text + ` (${ this.text.length })`
            }
        }
    }
</script>

<style>
</style>
