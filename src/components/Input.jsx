import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextArea, label, ...props }, ref) {
  const classStyle =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 fouces:outline-none fouces:outlin-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500" htmlFor="">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={classStyle} {...props} />
      ) : (
        <input ref={ref} className={classStyle} {...props} />
      )}
    </p>
  );
});

export default Input;
