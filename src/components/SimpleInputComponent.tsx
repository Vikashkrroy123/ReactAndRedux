import type { SimpleInputComponentType } from '../ComponentTypeChecker/SimpleInputComponentType'
import { useState } from 'react';
import { LabelComponent } from './LabelComponent';
export const SimpleInputComponent = ({ value, disable, label = "", getValue }: SimpleInputComponentType) => {
    const [val, setVal] = useState(value ?? '')
    const InsertInputValue = (event: any) => {
        setVal(event.target.value)
        getValue(event.target.value)
    }
    return (
        <>
            <div className="flex flex-col flex-start">
                {label && <LabelComponent label={label} />}
                <input width={50} value={val} onChange={InsertInputValue} />
            </div>
        </>
    )

}