import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import { useDispatch } from 'react-redux'

export const Cart = () => {
  const cartItems = useSelector((state)=> state.cart.itemsList);
  const quantity = useSelector((state)=> state.cart.totalQuantity);
  const dispatch = useDispatch();


  const incCartItems = (id, exactPrice) => {
    dispatch(cartActions.addToCart({id, exactPrice}))
  }

  const decCartItems = (id) => {
    dispatch(cartActions.removeFromCart(id))
  }

  const remove = (id) => {
    dispatch(cartActions.removeAll(id))
  }
  
  let total = 0;
    const itemsLists = useSelector(state => state.cart.itemsList);
    itemsLists.forEach((item) => {
      total += item.totalPrice      
    });
  

  return (
    <div className='max-w-[1640px] mx-auto p-4 bg-gray-100'>
      <div class="container mx-auto mt-10">
      <div class="flex flex-col lg:flex-row shadow-md my-10">
      <div class="w-full lg:w-3/4 bg-white px-10 py-10">
      <div class="flex justify-between border-b pb-8">
      <h1 class="font-semibold text-2xl">Shopping Cart</h1>
      <h2 class="font-semibold text-1xl">{quantity} Items</h2>
      </div>
      <div class="flex justify-around mt-10 mb-3">
      <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/3">Product Details</h3>
      <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/3 text-center">Quantity</h3>
      <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/3 text-center">Price</h3>
      </div>
      {cartItems.map((item) => (
           <div class="flex items-center justify-around hover:bg-gray-100 -mx-8 px-6 py-5">
           <div class="flex w-2/5">
           <div class="w-20">
           <img class="h-24 w-20 object-cover" src={item.image} alt=""/>
           </div>
           <div class="flex flex-col justify-between ml-4 flex-grow">
           <span class="font-bold text-sm">{item.name}</span>
                   <span class="text-xs">{item.category}</span>
                   <span class="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={(e)=>remove(item.id)}>Remove</span>
           </div>      
           </div>
           <div class="flex md:justify-between items-center w-1/4 pl-6 md:pl-0">
           <AiOutlineMinus onClick={(e) => decCartItems(item.id)}/>
                 <span class="mx-2 w-3">{item.quantity}</span>
           <AiOutlinePlus onClick={(e) => incCartItems(item.id, item.exactPrice)}/>
           </div>
               <span class="text-center w-1/3 font-semibold text-sm">$ {item.exactPrice}</span>
           </div>)
        )}
      <a href="#" class="flex font-semibold text-orange-600 text-sm mt-10">
       Continue Shopping</a>
      </div>

      <div id="summary" class="w-full lg:w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items {quantity}</span>
          <span class="font-semibold text-sm">$ {total}</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
        </div>
        <button class="bg-orange-500 border-none hover:bg-orange-700 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$ {total}</span>
          </div>
          <button class="bg-black font-semibold border-none hover:bg-gray-600 py-3 text-sm text-white uppercase w-full">Checkout</button>

      </div>
      </div>
        
    </div>
    </div>
    </div>
  )
}
