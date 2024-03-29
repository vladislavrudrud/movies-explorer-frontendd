import { useState } from "react";

export default function Validation() {
  const [isValue, setIsValue] = useState({});
  const [isError, setIsError] = useState({});
  const [isValid, setIsValid] = useState(false);
  function handleChangeInput(evt) {
    const input = evt.target;
    const name = input.name;
    const value = input.value;
    setIsValue({ ...isValue, [name]: value });
    setIsError({ ...isError, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  }
  return {
    isValid,
    isError,
    isValue,
    handleChangeInput,
    setIsValid,
    setIsError,
    setIsValue,
  };
}
