import Container from "@/components/container";
const ProductPage = () => {
  return (
    <Container className="flex-col">
      {/* Item */}
      <h2>Item Name</h2>
      <div className="grid w-full grid-cols-3">
        <div className="h-[400px] border">Image</div>
        <div className="h-[400px] border">Description</div>
        <div className="h-[400px] border">Price + Add to Cart Buttons</div>
      </div>
      {/* Reviews / Comments */}
      <div>Comments / Reviews</div>
    </Container>
  );
};
export default ProductPage;
