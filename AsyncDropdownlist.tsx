import React, { useEffect, useState } from "react";
import { DataItem, Dropdownlist } from "./Dropdownlist";

const fakeAPICall = (): Promise<DataItem[]> => {
  return new Promise((resolve, reject) => {
    resolve([
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" },
      { value: "3", label: "Item 3" },
      { value: "4", label: "Item 4" },
      { value: "5", label: "Item 5" },
    ]);
  });
};
export const AsyncDropdownlist = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchDatafromBFF = async () => {
      const fetchdata = await fakeAPICall();
      setData(fetchdata);
    };
    fetchDatafromBFF();

    // const fetchFakeDatas = fetch(
    //   "https://jsonplaceholder.typicode.com/posts"
    // ).then((res) => res.json());
    // fetchFakeDatas.then((res) => {
    //   console.log(res);
    // });
  }, []);

  return (
    <>
      <Dropdownlist
        data={data}
        onRemoveItem={() => {}}
        labels={{ show: "Show Data", hide: "Hide Data" }}
      ></Dropdownlist>
    </>
  );
};
