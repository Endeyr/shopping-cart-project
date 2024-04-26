import Container from "@/components/container";
import { ContentCard } from "../ui/content-card";

const Services = () => {
  return (
    <Container className="flex flex-col items-center w-full justify-evenly">
      <h2 className="w-full text-4xl font-bold text-center capitalize outline-black">
        Services
      </h2>
      <div className="flex flex-col items-center justify-center w-full gap-4 xl:flex-row">
        <ContentCard title="title">service</ContentCard>
        <ContentCard title="title">service</ContentCard>
        <ContentCard title="title">service</ContentCard>
      </div>
    </Container>
  );
};
export default Services;
