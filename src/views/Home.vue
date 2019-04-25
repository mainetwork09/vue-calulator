<template>
  <div class="home">
  	<h1>Calculator</h1>
  	<div>
  		<input type="text" v-model="screen">
  	</div>
	  <div>
	  	<button v-on:click="addNumber(1)">1</button> 
	  	<button v-on:click="addNumber(2)">2</button> 
	  	<button v-on:click="addNumber(3)">3</button> 
	  	<button v-on:click="plus">+</button>
	  </div>
		<div>
	  	<button v-on:click="addNumber(4)">4</button> 
	  	<button v-on:click="addNumber(5)">5</button> 
	  	<button v-on:click="addNumber(6)">6</button> 
	  	<button v-on:click="minus">-</button>
		</div>
		<div>
	  	<button v-on:click="addNumber(7)">7</button> 
	  	<button v-on:click="addNumber(8)">8</button> 
	  	<button v-on:click="addNumber(9)">9</button> 
	  	<button v-on:click="multiply">*</button>
	  </div>
		<div>
	  	<button v-on:click="addNumber(0)">0</button>
	  	<button v-on:click="clearScreen">Clear</button>
	  	<button v-on:click="devide">/</button>
	  </div>

  	<div>
  		<button v-on:click="calc">=</button>
  	</div>
  </div>
</template>

<script>
import { store } from './../store/store'

export default {
	name:'Calculator',
	//props: ['firstnumber','lastnumber'],
	data() {
		return {
			screen: '',
			firstnumber: '',
			lastnumber: 0,
			result: 0,
			operand: 'plus'
		};
	},
  methods:{
  	calc() {
  		this.lastnumber = this.screen
  		if( this.operand == 'plus'){
	  		this.screen = parseFloat( this.firstnumber ) + parseFloat( this.lastnumber )
	  	}else if( this.operand == 'minus' ){
	  		this.screen = parseFloat( this.firstnumber ) - parseFloat( this.lastnumber )
	  	}else if( this.operand == 'multiply' ){
	  		this.screen = parseFloat( this.firstnumber ) * parseFloat( this.lastnumber )
	  	}else if( this.operand == 'devide' ){
	  		this.screen = parseFloat( this.firstnumber ) / parseFloat( this.lastnumber )
	  	}

	  	console.log({
	  		number1: this.firstnumber,
	  		operand: this.operand,
	  		number2: this.lastnumber,
	  		result: this.screen
	  	})

	  	store.commit('calculatorHistory', {
	  		number1: this.firstnumber,
	  		operand: this.operand,
	  		number2: this.lastnumber,
	  		result: this.screen
	  	})
  	},
  	clearScreen() {
  		this.screen = ''
  	},
  	addNumber( number ) {
  		this.screen += "" + number
  	},
	  plus() {
	  	if( !this.screen ) return ;
	  	this.operand = 'plus'
	  	this.firstnumber = this.screen
	  	this.clearScreen()
	  	/*if( !this.firstnumber || !this.lastnumber ) return ;
	  	this.result = parseFloat( this.firstnumber ) + parseFloat( this.lastnumber )
	  	store.commit('calculatorResult', {
	  		firstnumber: parseFloat( this.firstnumber ),
				lastnumber: parseFloat( this.lastnumber ),
				result: this.result
	  	});*/
	  },
	  minus() {
	  	if( !this.screen ) return ;
	  	this.operand = 'minus'
	  	this.firstnumber = this.screen
	  	this.clearScreen()
	  	/*if( !this.firstnumber || !this.lastnumber ) return ;
	  	this.result = parseFloat( this.firstnumber ) - parseFloat(this.lastnumber)
	  	store.commit('calculatorResult',{
	  		firstnumber: parseFloat( this.firstnumber ),
				lastnumber: parseFloat( this.lastnumber ),
				result: this.result
	  	} )*/
	  },
	  multiply() {
	  	if( !this.screen ) return ;
	  	this.operand = 'multiply'
	  	this.firstnumber = this.screen
	  	this.clearScreen()
	  	/*if( !this.firstnumber || !this.lastnumber ) return ;
	  	this.result = parseFloat( this.firstnumber ) * parseFloat(this.lastnumber)
	  	store.commit('calculatorResult', {
	  		firstnumber: parseFloat( this.firstnumber ),
				lastnumber: parseFloat( this.lastnumber ),
				result: this.result
	  	} )*/
	  },
	  devide() {
	  	if( !this.screen ) return ;
	  	this.operand = 'devide'
	  	this.firstnumber = this.screen
	  	this.clearScreen()
	  	/*
	  	if( !this.firstnumber || !this.lastnumber ) return ;
	  	this.result = parseFloat( this.firstnumber ) / parseFloat(this.lastnumber)
	  	store.commit('calculatorResult', {
	  		firstnumber: parseFloat( this.firstnumber ),
				lastnumber: parseFloat( this.lastnumber ),
				result: this.result
	  	} )*/
	  }
	}
}
</script>
