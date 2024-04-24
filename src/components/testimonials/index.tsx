import Container from "@/components/container";
import { ContentCard } from "../ui/content-card";

const Testimonials = () => {
  return (
    <Container className="flex flex-col w-full justify-evenly items-center">
      <h2 className="font-bold outline-black capitalize text-4xl text-center w-full">
        Testimonials
      </h2>
      <div className="flex flex-col xl:flex-row gap-4 w-full justify-center items-center">
        <ContentCard title="review" footer="- author">
          Some review here
        </ContentCard>
        <ContentCard title="review" footer="- author">
          Some review here
        </ContentCard>
        <ContentCard title="review" footer="- author">
          Some review here
        </ContentCard>
        <ContentCard title="review" footer="- author">
          Some review here
        </ContentCard>
      </div>
    </Container>
  );
};
export default Testimonials;
