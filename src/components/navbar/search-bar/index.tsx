import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.currentTarget;
    setUserInput(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchParams.get("q") !== userInput) {
      const params = { q: userInput };
      if (location.pathname.indexOf("/products/") === -1) {
        navigate("/products/1");
      }
      setSearchParams(params);
    }
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
