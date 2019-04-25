import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    firstnumber: 0,
    lastnumber: 0,
    result: 0,
    calculator: {
      history: [],
      screen: '',
      firstnumber: '',
      lastnumber: 0,
      result: 0
    }
  },
  mutations: {
    increment: state => { state.count++ },
    decrement: state => { state.count-- },
    double: state => { state.count = state.count*2 },
    setZero : state => {state.count = 0 },
    plusFunc : state => { 
      state.result = parseFloat(state.firstnumber) + parseFloat(state.lastnumber)
    },
    result: (state, value) => { state.result = value },
    calculatorResult: (state, value) => { 
      console.log(value)
      state.calculator.firstnumber = value.firstnumber
      state.calculator.lastnumber = value.lastnumber
      state.calculator.result = value.result
    },
    calculatorHistory: (state, value) => {
      state.calculator.history.push(value)
    }
  },
  actions: {
  	increment: context => { context.commit('increment') },
  	decrement: context => { context.commit('decrement') },
    double: context => { context.commit('double') },
    setZero: context => { context.commit('setZero') },
    plusFunc: context => { context.commit('plusFunc') }
  },
  getters: {
  	count: state => state.count,
    firstnumber: state => state.calculator.firstnumber,
    lastnumber: state => state.calculator.lastnumber,
    result: state => state.calculator.result,
    screen: state => state.calculator.screen,
    history: state => state.calculator.history
  }
})