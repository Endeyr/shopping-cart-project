import Container from "@/components/container";

const AboutPage = () => {
  return (
    <Container className="flex-col justify-start">
      <h2 className="w-full text-xl font-bold text-center capitalize">
        About Us
      </h2>
      <div className="items-start justify-center gap-4 xl:grid xl:grid-cols-2">
        <div className="hidden mt-2 xl:block">
          <p>Image</p>
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
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
