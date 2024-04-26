import Container from "@/components/container";

const Hero = () => {
  return (
    <Container
      className="items-center justify-center bg-center bg-no-repeat bg-cover"
      id="hero-section"
    >
      <div className="flex flex-col items-start justify-between w-full gap-4 xl:w-1/2">
        <h2 className="w-full my-4 text-4xl font-bold text-center capitalize outline-black">
          Welcome to my site
        </h2>
        <p>Some words</p>
        <p>Add a background image</p>
        <p>Final paragraph</p>
        <button>Does something</button>
      </div>
    </Container>
  );
};
export default Hero;
