import React from "react";
import { useRouter } from "next/router";
function Infocontainer() {
  const router = useRouter();
  const data = router.query.info_container;
  return (
    <div>
      <h2>This is {data} page</h2>
    </div>
  );
}

export default Infocontainer;
