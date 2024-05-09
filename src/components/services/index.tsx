import Container from "@/components/container";
import { ContentCard } from "../ui/content-card";

const Services = () => {
  return (
    <Container className="flex flex-col items-center w-full justify-evenly">
      <h2 className="w-full text-4xl font-bold text-center capitalize outline-black">
        Services
      </h2>
      <div className="flex flex-col items-center justify-center w-full gap-4 xl:flex-row">
        <ContentCard title="Trade and Exchange">
          As the premier marketplace in Al Kharid, Chancellor Hassan&apos;s
          Bazaar serves as a hub for buying, selling, and trading various goods.
          Adventurers can find everything from weaponry and armor to rare
          artifacts and magical items, catering to adventurers of all levels.
        </ContentCard>
        <ContentCard title="Item Appraisal">
          Skilled appraisers are available at the bazaar to assess the value of
          treasures and artifacts brought in by adventurers. Whether it&apos;s
          an ancient relic uncovered from a forgotten tomb or a unique item
          obtained from a challenging quest, Chancellor Hassan&apos;s team
          provides expert evaluation and fair prices.
        </ContentCard>
        <ContentCard title="Special Orders">
          Chancellor Hassan&apos;s Bazaar welcomes special orders and
          commissions from adventurers seeking custom-made equipment or unique
          items tailored to their specific needs. Craftsmen and artisans in the
          bazaar&apos;s employ can bring adventurers&apos; visions to life,
          providing personalized gear and artifacts.
        </ContentCard>
      </div>
    </Container>
  );
};
export default Services;
