import { useRouter } from "next/router";
import React from "react";
import GeneralLayout from "../../layouts/GeneralLayout";

function Category() {
  const router = useRouter();
  const { category } = router.query;
  //   console.log('/[ashjhasd]'.replace(/[\[\]']+/g,''));
  console.log(category);
  return <GeneralLayout title={"Category"}>Category</GeneralLayout>;
}

export default Category;
