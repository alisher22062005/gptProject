interface InputData {
  placeHolder: string;
  value?: string;
  change: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({ placeHolder, value, change }: InputData) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => change(e.target.value)}
        placeholder={placeHolder}
        className=" bg-gray-100 p-[1%] rounded-[0.5rem] w-[90%] pl-3 placeholder:text-[0.8rem]"
      />
    </>
  );
}
