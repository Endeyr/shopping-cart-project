import Container from "@/components/container";

const Identity = () => {
  return (
    <Container>
      <div className="grid items-center justify-center w-full grid-col-3">
        {/* TODO placeholder image */}
        <img
          className="hidden sm:block w-[100px] h-[100px]"
          src="https://oldschool.runescape.wiki/images/Abyssal_whip.png?7263b"
          srcSet="https://oldschool.runescape.wiki/images/Abyssal_whip.png?7263b 100w"
          sizes="(max-width: 100px) 50dvw, 100px"
          alt="abyssal whip"
          loading="lazy"
        />
        <div className="flex flex-col items-center justify-start col-span-2 col-start-2 gap-2">
          <h2 className="w-full my-2 text-lg font-bold text-center capitalize">
            Who are we?
          </h2>
          <p className="px-4">Some words</p>
          <p className="px-4">More words</p>
          <p className="px-4">mission statement</p>
        </div>
      </div>
    </Container>
  );
};
export default Identity;
