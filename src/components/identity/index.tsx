import Container from "@/components/container";

const Identity = () => {
  return (
    <Container>
      <div className="grid grid-col-3 w-full items-center justify-center">
        {/* TODO placeholder image */}
        <img
          className="hidden sm:block w-[100px] h-[100px]"
          src="https://oldschool.runescape.wiki/images/Abyssal_whip.png?7263b"
          srcSet="https://oldschool.runescape.wiki/images/Abyssal_whip.png?7263b 100w"
          sizes="(max-width: 100px) 50dvw, 100px"
          alt="abyssal whip"
          loading="lazy"
        />
        <div className="col-span-2 col-start-2 flex flex-col justify-start items-center gap-2">
          <h2 className="font-bold capitalize text-lg text-center w-full my-2">
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
