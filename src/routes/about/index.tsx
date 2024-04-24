import Container from "@/components/container";

const AboutPage = () => {
  return (
    <Container className="flex-col justify-start">
      <h2 className="font-bold capitalize text-xl text-center w-full">
        About Us
      </h2>
      <div className="xl:grid xl:grid-cols-2 gap-4 justify-center items-start">
        <div className="mt-2 hidden xl:block">
          <p>Image</p>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <p>paragraph</p>
          <p>paragraph</p>
          <p>paragraph</p>
          <p>Call to action for or button</p>
        </div>
      </div>
    </Container>
  );
};
export default AboutPage;
