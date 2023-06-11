import {createSlice} from "@reduxjs/toolkit"
const initialState={
  cart:[
    {
      name:"ButterScotch",
      image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butterscotch-ice-cream-recipe.jpg",
      price:110,
      quantity:1
    },
    {
      name:"BlackCurrant",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xomkEOstnSVZze7sp7GDL9HUBqWXaF5pjw&usqp=CAU",
      price:100,
      quantity:1

      
    },
    {
      name:"pista",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWfUcsatUQ5OQg-84jGPqD3Rbzqi9Zzub_Q&usqp=CAU",
      price:90,
      quantity:1
    },
    {
      name:"chocalate",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVyiemrct9SOhDmwyZFu5c2Ho92YOU2_pHQ&usqp=CAU",
      price:100,
      quantity:1
    },
    {
      name:"vanilla",
      image:"https://www.savoryexperiments.com/wp-content/uploads/2021/06/Vanilla-Ice-Cream-9.jpg",
      price:80,
      quantity:1
    },
    {
      name:"mango",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCR88NLDmGutVNjPXFuVzFzgnrdehXKPo9pg&usqp=CAU",
      price:100,
      quantity:1
    },
     {
      name:"strawberry",
      image:"https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg",
      price:100,
      quantity:1
    },
     {
      name:"pineapple",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdMEbx-Wud_e-TkweBiiUYWnXvq5RzYomCA&usqp=CAU",
      price:110,
      quantity:1
    },
     {
      name:"Jackfruit",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpBh_7EzxaEkbyjlRweGwrVDH-m9dgj5Nwg&usqp=CAU",
      price:100,
      quantity:1
    }
    
    
  ],
  favourite:[],
  item:[],
  cash:[]
}

export const Reducer=createSlice({
  name:'user',
  initialState,
  reducers:{
    addingToFav:(state,action)=>{
     let presentData=state.favourite.find((ele)=>ele.name=== action.payload.name)
      let fullLength=state.favourite.length;
      console.log(fullLength)
      if(presentData){
        alert("already added")
      }
        else if(fullLength > 1){
          alert ('only two items can be added to favourite')
        }
      else{
        state.favourite.push(action.payload)
      }
    },
    removeFromFav:(state,action)=>{
      let data=state.favourite.filter((state,index)=>index!=action.payload)
      state.favourite=data
    }   ,

    addingToCart:(state,action)=>{
      let cartdata=state.item.find((ele)=>ele.name===action.payload.name)
      if(cartdata){
        alert ('item is already added to cart')
      }
      else {
        state.item.push(action.payload)
      }
    },
    incrementCart:(state,action)=>{
       let incrementdata=state.item.find((ele)=>ele.name===action.payload)
      if(incrementdata){
       incrementdata.quantity++;
        [...state.item] }},

    decrementCart:(state,action)=>{
       let decrementdata=state.item.find((ele)=>ele.name===action.payload)
     
      if(decrementdata.quantity>=2){
       decrementdata.quantity--;
        [...state.item]
       
    
  }
      else{
      let filterdata = state.item.filter((ele,i)=>
          ele.name!==action.payload
          
        )
        
         state.item=filterdata
      }
      
    },

    addToCash:(state,action)=>{
     

   let samedata=state.cash.find((ele)=>ele.name===action.payload.name)
      if(samedata ){
        
       samedata.quantity=action.payload.quantity;
        [...state.cash]}
    
      else {
           state.cash.push(action.payload)
           
      }
       
      
    },
    purchase:(state,action)=>{
      state.cash=[];
      state.item=[]; 
      
    }

    
       
      }
    
})


export const{ addingToFav, removeFromFav, addingToCart, incrementCart, decrementCart,addToCash,purchase}=Reducer.actions
export default Reducer.reducer