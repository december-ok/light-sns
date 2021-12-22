import { ChangeEvent, useCallback, useState } from "react";

export const useBoolean = (init: boolean) => {
  const [value, setValue] = useState<boolean>(init);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  }, []);
  const toggle = useCallback(() => {
    setValue((value) => !value);
  }, []);

  return { toggle, onChange, value, setValue } as {
    toggle: typeof toggle;
    onChange: typeof onChange;
    value: typeof value;
    setValue: typeof setValue;
  };
};
