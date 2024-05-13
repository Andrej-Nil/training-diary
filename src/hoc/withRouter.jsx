import {useParams} from "react-router-dom";


const withRouter = () => (Wrapper) => {
  return (props) => {
    const params = useParams();
    return (
      <Wrapper
        {...props}
        params={params}
      />
    )
  }
}

export default withRouter;