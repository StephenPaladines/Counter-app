import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const BreadCrumbs = props => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbs;
