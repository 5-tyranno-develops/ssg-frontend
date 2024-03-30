type CheckboxProps = {
  id: string
  text: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  isDisabled?: boolean
  checkboxShape?: string
}

export default function Checkbox({
  id,
  text,
  onChange,
  checked,
  isDisabled,
  checkboxShape = "rounded-full",
}: CheckboxProps) {
  return (
    <div className="basis-3/4 flex flex-row leading-4">
      <input
        id={id}
        type="checkbox"
        name={id}
        onChange={onChange}
        checked={checked}
        disabled={isDisabled}
        className={`
        flex-none w-[17px] h-[17px]
        appearance-none
        border border-gray-300 ${checkboxShape} 
        bg-no-repeat
        bg-center
        bg-[url('/asset/images/check.svg')]
        focus:outline-none
        ${
          checked
            ? "bg-[url('/asset/images/check.svg')] bg-[#FE5B5B]"
            : "bg-white"
        }
        
        `}
      />
      <label htmlFor={id} className=" pl-2">
        {text}
      </label>
    </div>
  )
}
