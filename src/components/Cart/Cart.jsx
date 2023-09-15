

const Cart = () => {
    return (
        <div className="flex-col mt-32 p-3 bg-white w-80 h-96 shadow-xl rounded-2xl">
            <div className="border-b-2">
                <h1 className="text-lg font-bold text-blue-500 pb-2">Credit Hours Remaining: </h1>
            </div>
            <div className="border-b-2">
                <h2 className="text-xl font-bold p-2">Course Names:</h2>
            </div>
            <div className="border-b-2">
                <h2 className="desc text-sm font-medium p-2">Total Credit</h2>
            </div>
        </div>
    );
};

export default Cart;