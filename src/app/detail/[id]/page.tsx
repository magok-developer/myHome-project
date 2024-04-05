"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  return (
    <>
      <div>{id}외않되</div>
    </>
  );
};

export default Page;
