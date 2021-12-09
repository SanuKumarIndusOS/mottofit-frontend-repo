import { useState, useEffect } from "react";

function useNameEncoder(firstName, lastName) {
  const [encodedName, setencodedName] = useState("");

  useEffect(() => {
    let trainerFullname = `${firstName || ""}-${lastName || ""}`;
    setencodedName(trainerFullname.toLocaleLowerCase());
  }, [])

 

  return encodedName;
}

export default useNameEncoder;
