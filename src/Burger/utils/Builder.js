// Bun, Salad, Cheese Slices and Cutlets

function Burger(props){      
   this.makeBurger = function(builder) {
       builder.step1() // order
       builder.step2(props) // prepare Order
       builder.step3() // 
       return builder.get()
   }
}


function makeBurger(){
    this.burger = null
     
    this.step1 = function(){
      this.burger = new Order()
    } 

    this.step2 = function(props){
      const {buns, salad, cheese, cutlests } = props   
      this.burger.addBuns(buns)
      this.burger.addSalad(salad)
      this.burger.addCheese(cheese)
      this.burger.addCutlets(cutlests)
    } 

    this.step3 = function() {
        // calculate total here 

    }

     this.get = function(){ 
     return this.burger
    }
}

function Order() {
     this.order = null
       
    // order place by and what is the order ?   
    
    this.display = function(){
        console.log(`your order has `)
    } 
}

// letssay 

let burger = new Burger()
let makeB = new makeBurger({
   buns: 2,
   salad: false,
   cheese: 2,
   Cutlets: 1
})

let order = burger.makeBurger(makeB)
order.display()

// get the employeeId via its login 

// {
//   order1: {
//       placedBy: 'kori',
//       order: {
//           bun: 2,
//           salad: false,
//           'Cheese Slices': 2,
//            'Cutlets' 1
//       },
//       price: 
//   }

// }



