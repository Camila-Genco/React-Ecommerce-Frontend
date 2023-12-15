import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { BASE_URL } from '../utils/config'
import { cartActions } from '../store/cartSlice'

export const Cart = () => {
  const cartItems = useSelector((state)=> state.cart.itemsList);
  const quantity = useSelector((state)=> state.cart.totalQuantity);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Adjust the structure to request payload
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

  //Checkout
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
        navigate("/order");
    } catch (err) {
      alert(err.message)
    }
  }
  
  //Cart actions
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

          {/*Shopping Cart*/}
          <div className="w-full lg:w-3/4 bg-white p-10">
              <div className="flex justify-between border-b pb-8">
                  <h1>Shopping Cart</h1>
                  <h2>{quantity} Items</h2>
              </div>
              <div className="flex justify-around mt-10 mb-3">
                  <h3>Product Details</h3>
                  <h3 className="text-center">Quantity</h3>
                  <h3 className="text-center">Price</h3>
              </div>
              {cartItems.map((item) => (
                  <div className="flex items-center justify-around hover:bg-gray-100 -mx-8 px-6 py-5">
                      <div className="flex w-2/5">
                          <div className="w-20">
                            <img className="h-24 w-20 object-cover" src={item.image} alt="product"/>
                          </div>
                          <div className="flex flex-col justify-between ml-4 flex-grow">
                              <span className="font-bold text-sm">{item.name}</span>
                              <span className="text-xs">{item.category}</span>
                              <span className="remove" onClick={(e)=>remove(item.id)}>Remove</span>
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
              <a href="/" className="formRedirect mt-10">
              Continue Shopping</a>
          </div>

          {/*Order Summary*/}
          <div className="w-full lg:w-1/4 px-8 py-10 bg-gray-200">
              <h1 className="border-b pb-8">Order Summary</h1>
              <div className="flex justify-between mt-10 mb-5 font-semibold text-sm uppercase">
                <span>Items {quantity}</span>
                <span>$ {total}</span>
              </div>
              <div>
                <label>Shipping</label>
                <select className="block w-full p-2 text-gray-600 text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-5">
                <label>Promo Code</label>
                <input type="text" placeholder="Enter your code" className="p-2 text-sm w-full"/>
              </div>
              <button className="buttonOrange">Apply</button>
              <div className="border-t mt-8">
                <div className="flex justify-between font-semibold text-sm uppercase py-6">
                  <span>Total cost</span>
                  <span>$ {total}</span>
                </div>
                <button className="buttonBlack" onClick={handleClick}>Checkout</button>
              </div>
          </div>  
        </div>
      </div>
    </div>
  )
}
