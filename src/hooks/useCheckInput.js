export default function useCheckInput() {
  return function (value){
    if(value.trim()){
      return false
    } else {
      return true
    }
  }
}