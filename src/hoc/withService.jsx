import useService from "../hooks/useService.js";

const withService = () => (Wrapper) => {
const service = useService();
  return (props) => {
    return (
      <Wrapper
        {...props}
        service={service}
      />
    )
  }
}

export default withService;