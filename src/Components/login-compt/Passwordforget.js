import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Passwordforget = () => {
  const {
    data: catData,
    isLoading,
    refetch
  } = useQuery([], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });


  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  return (
    <h1>
      This is the home page <p>{catData?.fact}</p>
      <button onClick={refetch}> Update Data (rereders the data on click)</button>
    </h1>
  );
};
export default Passwordforget;