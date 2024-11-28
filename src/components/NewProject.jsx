import { useRef } from "react";
import { data } from "autoprefixer";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = function () {
    const titleValue = titleRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    const dueDateValue = dueDateRef.current.value;

    // VALIDATION
    if (
      titleValue.trim() === "" ||
      descriptionValue.trim() === "" ||
      dueDateValue.trim() === ""
    ) {
      // SHOW ERROR MODAL
      modal.current.open();
      return;
    }
    onAdd({
      title: titleValue,
      description: descriptionValue,
      dueDate: dueDateValue,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonLabel="Try Again">
        <p className="text-xl font-bold text-stone-700 my-4"> Invalid Input</p>
        <p className="text-stone-600 mb-4">
          Please Make Sure To Enter a valid Input For Each Filed
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label={"Title"} type="text" />
          <Input ref={descriptionRef} label={"Description"} isTextArea />
          <Input ref={dueDateRef} label={"Due Date"} type="date" />
        </div>
      </div>
    </>
  );
}
