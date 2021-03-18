* User comes to a burger joint and orders a burger
* User can choose the ingredients for his burger. The ingredients are Bun, Salad, Cheese Slices and Cutlets
* The app should have the following features
* Order a burger with mix of ingredients.
* List All ordered burgers along with price.
* Create a service for burger price calculation and  total Sale // service should take care prcing not ui
* Search All burgers by Person name, total  total sale by person // 
Sample Input may look like this
Order Burger with the following option
Name or guy who order
Bun = 2 (fix price Rs 5 each bun)
salad = yes or no (price Rs 5)
Cheese Slices = (Rs 1 per slice)
cutlets = (Rs 2 per piece)


//  UI  -- Builder pattern for burger ? 
//

DB ->

employee table

1. employee_Id(primary-Key)  firstName  lastName
                 001          akash      kori  

 order table 
 1. order_id orderDate&time total employee_id(placedBy)
     1           3/18/2021    40       
     2
     3

 orderDescription

 orderId  Bun Salad Cheese Slices Cutlets 


 // service 

 // POST request
 placedOrder(employee_Id, orderDetails)

// GET request
getAllBurger()

// POSTRequest
getAllBurgerByEmpId(empId)



// Auth page
// login logout

// required customer detail -- name phone number
// order Detail   [need to have 4 option in dashboard with + and - ]
// placing the order will make api call to generate new order 







