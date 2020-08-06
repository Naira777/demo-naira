import React, { Suspense } from "react";

const withSuspense = (Component) => {
  return (
    <Suspense fallback={<div> Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default withSuspense;
