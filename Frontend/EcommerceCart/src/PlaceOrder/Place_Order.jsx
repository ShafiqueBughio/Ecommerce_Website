import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/Context';

const Place_Order = () => {
    const { GetTotalCartAmount } = useContext(ShopContext);

    return (
        <form className="max-w-7xl mx-auto p-4">
            {/* Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Place Order Left */}
                <div className="space-y-6">
                    <p className="text-lg font-semibold">Delivery Information</p>

                    {/* Multi-field Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="First name" 
                            className="w-full p-3 border border-gray-300 rounded-md" 
                        />
                        <input 
                            type="text" 
                            placeholder="Last name" 
                            className="w-full p-3 border border-gray-300 rounded-md" 
                        />
                    </div>

                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-3 border border-gray-300 rounded-md" 
                    />

                    <input 
                        type="text" 
                        placeholder="Street" 
                        className="w-full p-3 border border-gray-300 rounded-md" 
                    />

                    {/* Multi-field Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="City" 
                            className="w-full p-3 border border-gray-300 rounded-md" 
                        />
                        <input 
                            type="text" 
                            placeholder="State" 
                            className="w-full p-3 border border-gray-300 rounded-md" 
                        />
                    </div>

                    {/* Multi-field Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="Zip Code" 
                            className="w-full p-3 border border-gray-300 rounded-md" 
                        />
                        <input 
                            type="text" 
                            placeholder="Country" 
                            className="w-full p-3 border border-gray-300 rounded-md" 
                        />
                    </div>

                    <input 
                        type="text" 
                        placeholder="Phone" 
                        className="w-full p-3 border border-gray-300 rounded-md" 
                    />
                </div>

                {/* Place Order Right */}
                <div className="space-y-6 mt-12">
                    <div className="flex flex-col gap-4 p-6 border border-gray-300 rounded-lg shadow-md">
                        <h1 className="text-xl sm:text-2xl font-semibold">Cart Total</h1>
                        <div className="space-y-3">
                            {/* Subtotal */}
                            <div className="flex justify-between py-3">
                                <p>Subtotal</p>
                                <p>${GetTotalCartAmount()}</p>
                            </div>
                            <hr />
                            {/* Shipping Fee */}
                            <div className="flex justify-between py-3">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            {/* Total */}
                            <div className="flex justify-between py-3">
                                <h3 className="text-base sm:text-xl font-semibold">Total</h3>
                                <h3 className="font-semibold">${GetTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button className="w-full h-[58px] bg-latest_color text-white text-base sm:text-xl font-semibold cursor-pointer rounded-md hover:bg-red-600 transition-colors hover:bg-[linear-gradient(90deg,rgba(100,45,135,1)0%,rgba(200,33,33,1)0%,rgba(202,141,55,1)100%)]">
                            Proceed To Payment
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Place_Order;
