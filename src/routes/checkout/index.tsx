import Container from "@/components/container";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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
type PaymentType = {
  cardNumber: string;
  cardName: string;
  expirationMonth: string;
  expirationYear: string;
};
const initialPaymentFormData = {
  cardNumber: "",
  cardName: "",
  expirationMonth: "",
  expirationYear: "",
};

const CheckoutPage = () => {
  const [addressFormData, setAddressFormData] = useState<AddressType>(
    initialAddressFormData,
  );
  const [paymentFormData, setPaymentFormData] = useState<PaymentType>(
    initialPaymentFormData,
  );
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);
  const [addressFormError, setAddressFormError] = useState("");
  const [paymentFormError, setPaymentFormError] = useState("");

  const navigate = useNavigate();

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
      setAddressFormError("invalid street entry");
    } else if (addressFormData.state === "") {
      setAddressFormError("invalid state entry");
    } else if (addressFormData.city === "") {
      setAddressFormError("invalid city entry");
    } else if (addressFormData.zip === "") {
      setAddressFormError("invalid zip entry");
    } else {
      setIsAddressSubmitted(true);
      console.log("Address Form Submitted");
    }
    console.log(addressFormData);
  };
  const handlePaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentFormData({
      ...paymentFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePaymentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form validation
    if (paymentFormData.cardNumber === "") {
      setPaymentFormError("invalid card number entry");
    } else if (paymentFormData.cardName === "") {
      setPaymentFormError("invalid card name entry");
    } else if (paymentFormData.expirationMonth === "") {
      setPaymentFormError("invalid expiration month entry");
    } else if (paymentFormData.expirationYear === "") {
      setPaymentFormError("invalid expiration year entry");
    } else {
      setIsPaymentSubmitted(true);
      console.log("Payment Form Submitted");
    }
    console.log(paymentFormData);
  };
  // TODO style page
  return (
    <Container className="flex-col">
      <div>
        {isAddressSubmitted ? (
          <>
            <div>Review Address Info</div>
            <div>
              <div>{addressFormData.street}</div>
              <div>{addressFormData.city}</div>
              <div>{addressFormData.state}</div>
              <div>{addressFormData.zip}</div>
              <button
                onClick={() => {
                  setIsAddressSubmitted(false);
                }}
              >
                Edit
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>Address</h2>
            <form onSubmit={handleAddressSubmit}>
              {addressFormError && (
                <div className="text-destructive">
                  Error: {addressFormError}
                </div>
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
      <div>
        {isPaymentSubmitted ? (
          <>
            <div>Review Payment Info</div>
            <div>
              <div>{paymentFormData.cardNumber}</div>
              <div>{paymentFormData.cardName}</div>
              <div>{paymentFormData.expirationMonth}</div>
              <div>{paymentFormData.expirationYear}</div>
              <button
                onClick={() => {
                  setIsPaymentSubmitted(false);
                }}
              >
                Edit
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>Payment</h2>
            <form onSubmit={handlePaymentSubmit}>
              {paymentFormError && (
                <div className="text-destructive">
                  Error: {paymentFormError}
                </div>
              )}
              <div>
                <label htmlFor="cardName">Name:</label>
                <input
                  id="cardName"
                  type="text"
                  name="cardName"
                  placeholder="Name on the card..."
                  value={paymentFormData.cardName}
                  onChange={handlePaymentChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="cardNumber">Number:</label>
                <input
                  id="cardNumber"
                  type="tel"
                  name="cardNumber"
                  placeholder="xxxx xxxx xxxx xxxx"
                  inputMode="numeric"
                  pattern="[0-9\s]{13,19}"
                  maxLength={19}
                  value={paymentFormData.cardNumber}
                  onChange={handlePaymentChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="expirationMonth">Expiration Month:</label>
                <input
                  id="expirationMonth"
                  type="number"
                  name="expirationMonth"
                  placeholder="01"
                  maxLength={2}
                  min="1"
                  max="12"
                  value={paymentFormData.expirationMonth}
                  onChange={handlePaymentChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="expirationYear">Expiration Year:</label>
                <input
                  id="expirationYear"
                  type="number"
                  name="expirationYear"
                  placeholder="2024"
                  maxLength={4}
                  min="2024"
                  max="2050"
                  value={paymentFormData.expirationYear}
                  onChange={handlePaymentChange}
                  autoComplete="off"
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
      {isAddressSubmitted && isPaymentSubmitted && (
        <>
          <button
            onClick={() => {
              console.log("Confirmed and submitted to backend");
              navigate("/confirmation");
            }}
          >
            Confirm
          </button>
        </>
      )}
    </Container>
  );
};
export default CheckoutPage;
