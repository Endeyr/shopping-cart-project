import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { OutletContextType } from "@/types/type";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

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
  const { cart, setCart } = useOutletContext<OutletContextType>();
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

  let totalPrice = 0;
  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    totalPrice += subtotal;
  });

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
  return (
    <Container className="flex-col md:space-y-8">
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div>
          <span className="font-bold">Total: </span>
          {Number(totalPrice.toFixed(0)).toLocaleString("en-US")}gp
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          {isAddressSubmitted ? (
            <>
              <div className="font-bold text-center">Review Address Info</div>
              <div className="flex flex-col items-end justify-center w-full gap-2 p-2 shadow-md sm:w-1/2">
                <div className="flex flex-col justify-between w-full gap-1 lg:flex-row">
                  <span className="font-bold">Street: </span>
                  {addressFormData.street}
                </div>
                <div className="flex flex-col justify-between w-full gap-1 lg:flex-row">
                  <span className="font-bold">City: </span>
                  {addressFormData.city}
                </div>
                <div className="flex flex-col justify-between w-full gap-1 lg:flex-row">
                  <span className="font-bold">State: </span>
                  {addressFormData.state}
                </div>
                <div className="flex flex-col justify-between w-full gap-1 lg:flex-row">
                  <span className="font-bold">Zip Code: </span>
                  {addressFormData.zip}
                </div>
                <Button
                  onClick={() => {
                    setIsAddressSubmitted(false);
                  }}
                >
                  Edit
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-bold text-center">Address</h2>
              <form
                className="flex flex-col items-center justify-center w-full gap-2 p-2 shadow-md sm:w-1/2"
                onSubmit={handleAddressSubmit}
              >
                {addressFormError && (
                  <div className="text-destructive">
                    Error: {addressFormError}
                  </div>
                )}
                <label
                  htmlFor="street"
                  className="flex flex-col justify-between w-full gap-1 lg:flex-row"
                >
                  <span className="font-bold">Street:</span>
                  <input
                    id="street"
                    className="w-full px-1 lg:w-2/3 dark:text-black"
                    type="text"
                    name="street"
                    placeholder="Street where you live..."
                    value={addressFormData.street}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <label
                  htmlFor="city"
                  className="flex flex-col justify-between w-full gap-1 lg:flex-row"
                >
                  <span className="font-bold">City:</span>
                  <input
                    id="city"
                    className="w-full px-1 lg:w-2/3 dark:text-black"
                    type="text"
                    name="city"
                    placeholder="City where you live..."
                    value={addressFormData.city}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <label
                  htmlFor="state"
                  className="flex flex-col justify-between w-full gap-1 lg:flex-row"
                >
                  <span className="font-bold">State:</span>
                  <input
                    id="state"
                    className="w-full px-1 lg:w-2/3 dark:text-black"
                    type="text"
                    name="state"
                    placeholder="State where you live..."
                    value={addressFormData.state}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <label
                  htmlFor="zip"
                  className="flex flex-col justify-between w-full gap-1 lg:flex-row"
                >
                  <span className="font-bold">Zip Code:</span>
                  <input
                    id="zip"
                    className="w-full px-1 lg:w-2/3 dark:text-black"
                    type="text"
                    name="zip"
                    placeholder="Zip Code where you live..."
                    value={addressFormData.zip}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <div className="flex items-center justify-end w-full">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </>
          )}
        </div>
        {/* Payment Info */}
        <div className="flex flex-col items-center justify-center w-full gap-2">
          {isPaymentSubmitted ? (
            <>
              <div className="font-bold text-center">Review Payment Info</div>
              <div className="flex flex-col items-end justify-center w-full gap-2 p-2 shadow-md sm:w-1/2">
                <div className="flex flex-col justify-between w-full gap-1 lg:flex-row">
                  <span className="font-bold">Card Number: </span>
                  {paymentFormData.cardNumber}
                </div>
                <div className="flex flex-col justify-between w-full gap-1 lg:flex-row">
                  <span className="font-bold">Card Name: </span>
                  {paymentFormData.cardName}
                </div>
                <div className="flex flex-col justify-between w-full gap-1 lg:flex-row">
                  <span className="font-bold">Exp Month: </span>
                  {paymentFormData.expirationMonth}
                </div>
                <div className="flex flex-col justify-between w-full gap-1 lg:flex-row">
                  <span className="font-bold">Exp Year: </span>
                  {paymentFormData.expirationYear}
                </div>
                <Button
                  onClick={() => {
                    setIsPaymentSubmitted(false);
                  }}
                >
                  Edit
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-bold text-center">Payment</h2>
              <form
                onSubmit={handlePaymentSubmit}
                className="flex flex-col items-center justify-center w-full gap-2 p-2 shadow-md sm:w-1/2"
              >
                {paymentFormError && (
                  <div className="text-destructive">
                    Error: {paymentFormError}
                  </div>
                )}

                <label
                  htmlFor="cardName"
                  className="flex flex-col justify-between w-full gap-1 lg:flex-row"
                >
                  <span className="font-bold">Name:</span>
                  <input
                    id="cardName"
                    className="w-full px-1 lg:w-2/3 dark:text-black"
                    type="text"
                    name="cardName"
                    placeholder="Name on the card..."
                    value={paymentFormData.cardName}
                    onChange={handlePaymentChange}
                    autoComplete="off"
                    required
                  />
                </label>
                <label
                  htmlFor="cardNumber"
                  className="flex flex-col justify-between w-full gap-1 lg:flex-row"
                >
                  <span className="font-bold">Number:</span>
                  <input
                    id="cardNumber"
                    className="w-full px-1 lg:w-2/3 dark:text-black"
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
                </label>
                <label
                  htmlFor="expirationMonth"
                  className="flex flex-col justify-between w-full gap-1 lg:flex-row"
                >
                  <span className="font-bold">Exp Month:</span>
                  <input
                    id="expirationMonth"
                    className="w-full px-1 lg:w-2/3 dark:text-black"
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
                </label>
                <label
                  htmlFor="expirationYear"
                  className="flex flex-col justify-between w-full gap-1 lg:flex-row"
                >
                  <span className="font-bold">Exp Year:</span>
                  <input
                    id="expirationYear"
                    className="w-full px-1 lg:w-2/3 dark:text-black"
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
                </label>
                <div className="flex items-center justify-end w-full">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </>
          )}
        </div>
        {isAddressSubmitted && isPaymentSubmitted && (
          <>
            <Button
              onClick={() => {
                console.log("Confirmed and submitted to backend");
                setCart([]);
                localStorage.removeItem("cart");
                navigate("/confirmation");
              }}
            >
              Confirm
            </Button>
          </>
        )}
      </div>
    </Container>
  );
};
export default CheckoutPage;
