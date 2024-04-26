import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({
  setItemName,
}: {
  setItemName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.currentTarget;
    setUserInput(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItemName(userInput);
    setUserInput("");
  };
  return (
    <form id="searchForm" className="col-span-2" onSubmit={handleSubmit}>
      <div className="flex items-center w-full space-x-2">
        <Input
          type="text"
          id="userInput"
          name="userInput"
          placeholder="Search"
          value={userInput}
          onChange={handleChange}
        />
        <Button type="submit">
          <IoSearch />
        </Button>
      </div>
    </form>
  );
};
export default SearchBar;
