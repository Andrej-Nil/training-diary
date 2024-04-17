import useCheckInput from "./useCheckInput.js";

export default function useCheckForm(){
  const check = useCheckInput()
  return (inputList) => {
    let rez = false;
    inputList.forEach((input) => {
      rez = rez || input.hasError || check(input.value)
    })
    return rez;
  }
}