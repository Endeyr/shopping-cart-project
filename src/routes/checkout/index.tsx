import Container from "@/components/container";
import { ChangeEvent, FormEvent, useState } from "react";
type AddressType = {
  street: string;
  city: string;
  state: string;
  zip: string;
};
const initialAddressFormData = {
  street: "",
  city: "",
  state: "",
  zip: "",
};
const CheckoutPage = () => {
  const [addressFormData, setAddressFormData] = useState<AddressType>(
    initialAddressFormData,
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressFormData({
      ...addressFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddressSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form validation
    if (addressFormData.street === "") {
      setFormError("invalid street entry");
    } else if (addressFormData.state === "") {
      setFormError("invalid state entry");
    } else if (addressFormData.city === "") {
      setFormError("invalid city entry");
    } else if (addressFormData.zip === "") {
      setFormError("invalid zip entry");
    } else {
      setIsSubmitted(true);
      console.log("Form Submitted");
    }
    console.log(addressFormData);
  };
  return (
    <Container className="flex-col">
      <div>
        {isSubmitted ? (
          <>
            <div>Review</div>
            <div>
              <div>{addressFormData.street}</div>
              <div>{addressFormData.city}</div>
              <div>{addressFormData.state}</div>
              <div>{addressFormData.zip}</div>
              <div>Confirm Button</div>
              <div>Edit Button</div>
            </div>
          </>
        ) : (
          <>
            <h2>Address</h2>
            <form onSubmit={handleAddressSubmit}>
              {formError && (
                <div className="text-destructive">Error: {formError}</div>
              )}
              <div>
                <label htmlFor="street">Street:</label>
                <input
                  id="street"
                  type="text"
                  name="street"
                  placeholder="Street where you live..."
                  value={addressFormData.street}
                  onChange={handleAddressChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City where you live..."
                  value={addressFormData.city}
                  onChange={handleAddressChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="state">State:</label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  placeholder="State where you live..."
                  value={addressFormData.state}
                  onChange={handleAddressChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="zip">Zip Code:</label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  placeholder="Zip Code where you live..."
                  value={addressFormData.zip}
                  onChange={handleAddressChange}
                  required
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </>
        )}
      </div>
      {/* Payment Info */}
      <div>Payment Info</div>
    </Container>
  );
};
export default CheckoutPage;
