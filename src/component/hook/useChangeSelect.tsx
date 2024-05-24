import { useState } from "react";

const useChangeSelect = <T,>(defaultValue: T) => {
  const [select, setSelect] = useState(defaultValue as T);

  const onChange = (name: string, value: T) => {
    setSelect(value);
  };

  return { onChange, select, setSelect };
};

export default useChangeSelect;
