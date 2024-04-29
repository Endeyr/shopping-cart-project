import Container from "@/components/container";

const CartPage = () => {
  return (
    <Container className="flex-col">
      <h2 className="w-full text-xl font-bold text-center capitalize">Cart</h2>
      <ul className="flex flex-col w-full gap-4">
        <li className="grid grid-cols-4 gap-4 p-2 border min-h-[20dvh]">
          <div className="flex items-center justify-center">Image</div>
          <div className="flex flex-col justify-between col-span-2">
            <div>Description</div>
            <div className="flex gap-4">
              <button>Qty</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="flex items-end justify-center">Price: $30</div>
        </li>
        <li className="grid grid-cols-4 gap-4 p-2 border min-h-[20dvh]">
          <div className="flex items-center justify-center">Image</div>
          <div className="flex flex-col justify-between col-span-2">
            <div>Description</div>
            <div className="flex gap-4">
              <button>Qty</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="flex items-end justify-center">Price: $30</div>
        </li>
        <li className="grid grid-cols-4 gap-4 p-2 border min-h-[20dvh]">
          <div className="flex items-center justify-center">Image</div>
          <div className="flex flex-col justify-between col-span-2">
            <div>Description</div>
            <div className="flex gap-4">
              <button>Qty</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="flex items-end justify-center">Price: $30</div>
        </li>
      </ul>
      <div className="flex justify-end w-full px-2 mx-2">
        <span className="mr-[140px] text-lg font-bold">Total: $90</span>
      </div>
    </Container>
  );
};
export default CartPage;
