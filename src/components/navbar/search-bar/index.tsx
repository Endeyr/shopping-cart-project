import { useState } from "react";

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
    <form id="searchForm" onSubmit={handleSubmit}>
      <label htmlFor="userInput">
        Name:
        <input
          className="dark:text-black"
          id="userInput"
          name="userInput"
          type="text"
          value={userInput}
          onChange={handleChange}
        />
      </label>
      <button>Search</button>
    </form>
  );
};
export default SearchBar;
