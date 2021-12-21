import { ChangeEvent, useCallback, useState } from "react";

export const useCheckBox = (init: boolean) => {
  const [value, setValue] = useState<boolean>(init);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  }, []);

  return [onChange, value, setValue] as [
    typeof onChange,
    typeof value,
    typeof setValue
  ];
};
