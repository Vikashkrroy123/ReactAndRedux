import { useState, forwardRef, useRef, useImperativeHandle } from "react";

const ChildComponent = forwardRef(({}, ref) => {
    const[count, setCount] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
        onFocus() {
            inputRef?.current?.focus();
          },
          onClear() {
            if(inputRef?.current) {
                inputRef.current.value = "";
            }
          },
    }))

    return (
        <>
        <div className="flex gap-2 items-center bg-red-500 p-4 rounded-md">
            <button onClick={() => setCount((prev) => prev + 1)}>Click Me {count}</button>
        </div>
        <input className="border text-black border-gray-300 p-2 rounded-md bg-white" name="input" type="text" ref={inputRef}/>
        </>
    )
})
export default ChildComponent;