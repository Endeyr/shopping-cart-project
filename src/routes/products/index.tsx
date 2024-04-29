import Container from "@/components/container";

const ProductsPage = () => {
  return (
    <Container className="grid grid-cols-5">
      {/* Sidebar */}
      <div className="w-full col-span-1">Sidebar</div>
      {/* Main */}
      <div className="flex flex-col w-full col-span-4 gap-2">
        <h2>Products</h2>
        <div className="grid w-full grid-cols-4 col-span-4">
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
          <div className="border h-[200px]">Item</div>
        </div>
      </div>
    </Container>
  );
};
export default ProductsPage;
