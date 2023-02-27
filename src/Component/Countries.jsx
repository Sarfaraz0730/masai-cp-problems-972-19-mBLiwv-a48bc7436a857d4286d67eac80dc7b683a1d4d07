import LoadingIndicator from "./LoadingIndicator";
import { useEffect, useState } from "react";
import axios from "axios";

function Countries() {
  const [data, setData] = useState();

  //  const EditDescription = async (form: any) => {
  //    try {
  //      const result = await axios.patch(
  //        "http://localhost:80/client/updatePostDescription",
  //        {},
  //        {
  //          params: form,
  //          headers: {
  //            Authorization: `Bearer ${token}`,
  //          },
  //        }
  //      );
  //      setPostEdit(result.data);
  //      showSnackbar("Your Post has been edited");
  //    } catch (err) {
  //      console.log(err);
  //    }
  //  };
  const countriesData = async () => {
    try {
      const result = await axios.get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
      );

      setData(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    countriesData();
  }, []);
  console.log("data", data);

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
      
        {data ? (
          data.map((e, i) => {
            return (
              <div
                style={{
                  border: "3px solid black",
                  margin: "10px",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "25px",
                  fontWeight: 400,
                }}
              >
                <div key={i}> Country : {e.country}</div>
                <div key={i}> population : {e.population}</div>
              </div>
            );
          })
        ) : (
          <LoadingIndicator />
        )}
      </div>
      <div>{/* Pagination */}</div>
    </div>
  );
}

export default Countries;
