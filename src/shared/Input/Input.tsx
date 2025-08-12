interface InputData {
  placeHolder: string;
}

const prop: InputData = {
  placeHolder: "",
};
export default function Input({ placeHolder }: InputData) {
  return (
    <>
      <input
        type="text"
        placeholder={placeHolder}
        className=" bg-gray-100 p-[1%] rounded-[0.5rem] w-[90%] pl-3 placeholder:text-[0.8rem]"
      />
    </>
  );
}
