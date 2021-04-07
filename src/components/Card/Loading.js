import React from "react";
import { LoaderProvider, useLoading, Circles } from '@agney/react-loading';
import { propTypes } from "react-bootstrap/esm/Image";

const Loading=(props)=> {
  const { containerProps, indicatorEl } = useLoading({
    loading: props.loading,
    loaderProps: {
        // Any props here would be spread on to the indicator element.
        style:{ fill: 'yellowgreen' }
      }
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}
export default Loading