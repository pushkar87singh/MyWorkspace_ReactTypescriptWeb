import React, { useState } from "react";
import Loader from "../../loader/Loader";
//my data
interface Person {
  id: number;
  name: string;
}

const test = {
  error: null,
  data: { id: 123, name: "Pushkar Singh" } as Person,
  loading: false
};

const LoaderWorkingDemo = () => {
  return (
    <>
      <Loader {...test} errorMessage="Test Message of your choice">
        {({ ...specialData }) => {
          return <>{specialData.name}</>;
        }}
      </Loader>
    </>
  );
};

export default LoaderWorkingDemo;
