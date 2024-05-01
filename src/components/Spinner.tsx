import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

type SpinnerProps = {
  loading: boolean;
};

const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <ClipLoader
      loading={loading}
      color="#FFFFFF"
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
