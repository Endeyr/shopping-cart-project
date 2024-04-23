import Container from "@/components/container";
import { ContentCard } from "../ui/content-card";

const Services = () => {
  return (
    <Container className="flex flex-col w-full justify-evenly items-center">
      <h2 className="font-bold outline-black capitalize text-4xl text-center w-full">
        Services
      </h2>
      <div className="flex flex-col xl:flex-row w-full justify-center items-center gap-4">
        <ContentCard title="title">service</ContentCard>
        <ContentCard title="title">service</ContentCard>
        <ContentCard title="title">service</ContentCard>
      </div>
    </Container>
  );
};
export default Services;
