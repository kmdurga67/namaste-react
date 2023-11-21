import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <img style={{height:"90vh", width:"100%"}}
        src="https://t3.ftcdn.net/jpg/03/56/19/18/360_F_356191845_Uf1HSScTIHcxXeK1UXuEn0rdAzMvTfxo.jpg"
        alt="something wrong"
      />
      <h1>
        {err.status} : {err.statusText}
      </h1>
    </>
  );
};

export default Error;
