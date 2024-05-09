import identityImg from "@/assets/images/shop.webp";
import Container from "@/components/container";

const Identity = () => {
  return (
    <Container className="bg-os_header_lite dark:bg-os_header_dark">
      <div className="grid w-full gap-4 grid-col-2">
        <div className="flex items-center justify-center col-start-1">
          <img
            className="hidden sm:block w-[1200px] h-[630px] object-scale-down"
            src={identityImg}
            alt="shop"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center justify-center col-span-1 col-start-2 gap-4">
          <h2 className="w-full my-2 text-lg font-bold text-center capitalize">
            Chancellor Hassan&apos;s Bazaar
          </h2>
          <p className="px-4">
            We strive to be the premier destination in Al Kharid, offering
            adventurers a vibrant marketplace where they can buy, sell, and
            trade goods of all kinds.
          </p>
          <p className="px-4">
            Our goal is to foster a dynamic community where adventurers can
            connect, share knowledge, and embark on epic quests together.
          </p>
          <p className="px-4">
            With a dedication to integrity, fairness, and exceptional service,
            we aim to enrich the journey of every adventurer who passes through
            our gates, making Chancellor Hassan&apos;s Bazaar the heart of
            commerce and camaraderie in Gielinor.
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Identity;
