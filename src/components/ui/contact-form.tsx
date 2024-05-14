import { Button } from "@/components/ui/button";
import { useState } from "react";
type ErrorMessage = {
  name: string;
  email: string;
  message: string;
};
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ErrorMessage>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      name: "",
      email: "",
      message: "",
    });

    // validation
    let hasErrors = false;
    if (!name) {
      setErrors({
        ...errors,
        name: "First name must be longer than 1 character",
      });
      hasErrors = true;
    }
    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      hasErrors = true;
    }
    if (message.length < 1) {
      setErrors({
        ...errors,
        message: "Message must be longer than 1 character",
      });
      hasErrors = true;
    }
    if (!hasErrors) {
      // Send data to backend
      console.log("Form submitted", name, email, message);

      // Clear form
      setName("");
      setEmail("");
      setMessage("");
      alert("Form submitted successfully");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full gap-2 sm:w-1/2"
    >
      {errors.name && <div className="text-destructive">{errors.name}</div>}
      <label
        htmlFor="name"
        className="flex flex-col justify-between w-full gap-1 lg:flex-row"
      >
        Name:
        <input
          id="name"
          className="w-full px-1 lg:w-2/3"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
          aria-label="Name"
        />
      </label>
      {errors.email && <div className="text-destructive">{errors.email}</div>}
      <label
        htmlFor="email"
        className="flex flex-col justify-between w-full gap-1 lg:flex-row"
      >
        Email:
        <input
          id="email"
          className="w-full px-1 lg:w-2/3"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          aria-label="Email"
        />
      </label>
      {errors.message && (
        <div className="text-destructive">{errors.message}</div>
      )}
      <label
        htmlFor="message"
        className="flex flex-col justify-between w-full gap-1 lg:flex-row"
      >
        Message:
        <textarea
          id="message"
          className="w-full px-1 lg:w-2/3"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message..."
          aria-label="Message"
        />
      </label>
      <div className="flex items-center justify-end w-full">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
export default ContactForm;
