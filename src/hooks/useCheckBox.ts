import { ChangeEvent, useCallback, useState } from "react";

export const useBoolean = (init: boolean) => {
  const [value, setValue] = useState<boolean>(init);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  }, []);
  const onToggle = useCallback(() => {
    setValue((value) => !value);
  }, []);

  return [onToggle, onChange, value, setValue] as [
    typeof onToggle,
    typeof onChange,
    typeof value,
    typeof setValue
  ];
};
