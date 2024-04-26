import Container from "@/components/container";
import { ContentCard } from "../ui/content-card";

const Testimonials = () => {
  return (
    <Container className="flex flex-col items-center w-full justify-evenly">
      <h2 className="w-full text-4xl font-bold text-center capitalize outline-black">
        Testimonials
      </h2>
      <div className="flex flex-col items-center justify-center w-full gap-4 xl:flex-row">
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
