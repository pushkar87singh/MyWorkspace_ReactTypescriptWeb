import React, { useState } from "react";
import Loader from "../../loader/Loader";
//my data
interface ILoaderProps<T> {
  className?: string;
  loading?: boolean;
  error?: any;
  errorMessage: string;
  data?: T;
  loaderComponent?: React.ReactNode;
}
interface Person {
  id: number;
  name: string;
}
export interface IInsightWithScalesQuery {
  insightWithScales: {
    id: string;
    name: string;
    description: string;
    createDate: number;
  };
}
const test = {
  error: {},
  data: { id: 123, name: "Pushkar Singh" } as Person,
  loading: true
};

interface IRiseInsightContent {
  id: string;
}
const TestComponent = () => {
  return (
    <>
      <h5>It is Test Component</h5>
    </>
  );
};
const RiseInsightContent = () => {
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

export default RiseInsightContent;
