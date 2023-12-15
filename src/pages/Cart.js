import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const cartItems = useSelector((state)=> state.cart.itemsList);
  const quantity = useSelector((state)=> state.cart.totalQuantity);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productsArray = Object.keys(cartItems).map(itemId => ({
    productId: parseInt(cartItems[itemId].id),
    amount: parseInt(cartItems[itemId].quantity)
  }));
 
  const requestBody = {
    user: {
      id: user?.id
    },
    products: productsArray,
  };

  console.log(requestBody);

  const handleClick = async e =>{
    e.preventDefault();
    try {
      if(!user || user === undefined || user===null){
        return alert("Please sign in")}
        const res = await fetch(`${BASE_URL}orders`, {
          method: "post",
          headers:{
            "content-type":"application/json",
          },
          body: JSON.stringify(requestBody)
          
        })
        const result = await res.json()
        if(!res.ok){
          return alert(result.message)
        }
        navigate("/");
    } catch (err) {
      alert(err.message)
    }

  }

  const incCartItems = (id, price) => {
    dispatch(cartActions.addToCart({id, price}))
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
      <div className="container mx-auto mt-10">
      <div className="flex flex-col lg:flex-row shadow-md my-10">
      <div className="w-full lg:w-3/4 bg-white px-10 py-10">
      <div className="flex justify-between border-b pb-8">
      <h1 className="font-semibold text-2xl">Shopping Cart</h1>
      <h2 className="font-semibold text-1xl">{quantity} Items</h2>
      </div>
      <div className="flex justify-around mt-10 mb-3">
      <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/3">Product Details</h3>
      <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/3 text-center">Quantity</h3>
      <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/3 text-center">Price</h3>
      </div>
      {cartItems.map((item) => (
           <div className="flex items-center justify-around hover:bg-gray-100 -mx-8 px-6 py-5">
           <div className="flex w-2/5">
           <div className="w-20">
           <img className="h-24 w-20 object-cover" src={item.image} alt=""/>
           </div>
           <div className="flex flex-col justify-between ml-4 flex-grow">
           <span className="font-bold text-sm">{item.name}</span>
                   <span className="text-xs">{item.category}</span>
                   <span className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={(e)=>remove(item.id)}>Remove</span>
           </div>      
           </div>
           <div className="flex md:justify-between items-center w-1/4 pl-6 md:pl-0">
           <AiOutlineMinus onClick={(e) => decCartItems(item.id)}/>
                 <span className="mx-2 w-3">{item.quantity}</span>
           <AiOutlinePlus onClick={(e) => incCartItems(item.id, item.exactPrice)}/>
           </div>
               <span className="text-center w-1/3 font-semibold text-sm">$ {item.exactPrice}</span>
           </div>)
        )}
      <a href="#" className="flex font-semibold text-orange-600 text-sm mt-10">
       Continue Shopping</a>
      </div>

      <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items {quantity}</span>
          <span className="font-semibold text-sm">$ {total}</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-orange-500 border-none hover:bg-orange-700 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$ {total}</span>
          </div>
          <button className="bg-black font-semibold border-none hover:bg-gray-600 py-3 text-sm text-white uppercase w-full" onClick={handleClick}>Checkout</button>

      </div>
      </div>
        
    </div>
    </div>
    </div>
  )
}
