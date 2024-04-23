import Container from "@/components/container";

const Hero = () => {
  return (
    <Container
      className="bg-no-repeat bg-cover bg-center justify-center items-center"
      id="hero-section"
    >
      <div className="xl:w-1/2 w-full flex flex-col justify-between gap-4 items-start">
        <h2 className="font-bold outline-black capitalize text-4xl text-center w-full my-4">
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
