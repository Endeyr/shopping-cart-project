import Container from "@/components/container";
import { ContentCard } from "../ui/content-card";

const Testimonials = () => {
  return (
    <Container className="flex flex-col items-center w-full justify-evenly">
      <h2 className="w-full text-4xl font-bold text-center capitalize outline-black">
        Testimonials
      </h2>
      <div className="flex flex-col items-center justify-center w-full gap-4 xl:flex-row">
        <ContentCard
          title="A haven for traders and adventurers alike!"
          footer="- Sir Roland, Knight of Falador"
        >
          Chancellor Hassan's Bazaar is where I found that elusive item I'd been
          seeking for weeks. The bustling atmosphere, combined with the helpful
          staff, made my shopping experience truly memorable. I'll be returning
          here for all my future needs.
        </ContentCard>
        <ContentCard
          title="Incredible selection and unbeatable prices!"
          footer="- Lady Elara, Merchant Guild Representative"
        >
          As a seasoned merchant, I've visited markets all across Gielinor, but
          none compare to the variety and value offered at Chancellor Hassan's
          Bazaar. From common essentials to rare treasures, this place has it
          all. Highly recommended!
        </ContentCard>
        <ContentCard
          title="A gem in the heart of Al Kharid!"
          footer="- Thalia the Wanderer, Explorer"
        >
          Whether you're a seasoned adventurer or a newcomer to the realm,
          you'll find everything you need here. The staff's knowledge and
          hospitality are second to none, making every visit a delight. Truly a
          testament to the spirit of trade and community in Old School
          RuneScape.
        </ContentCard>
        <ContentCard
          title="They have all my potion ingredients!"
          footer="- Malachi the Mystic, Alchemy Enthusiast"
        >
          The quality of their merchandise is unmatched, and their willingness
          to accommodate special requests has been a lifesaver on more than one
          occasion. Thank you for being a trusted partner on my magical journey!
        </ContentCard>
      </div>
    </Container>
  );
};
export default Testimonials;
