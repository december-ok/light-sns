import { ChangeEvent, useCallback, useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState<string>("");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [onChange, value, setValue] as [
    typeof onChange,
    string,
    typeof setValue
  ];
};
