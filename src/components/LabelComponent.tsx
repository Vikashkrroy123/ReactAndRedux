import type { LabelComponentTypes } from '../ComponentTypeChecker/SimpleInputComponentType'
export const LabelComponent = ({ label }: LabelComponentTypes) => {
    return <span>{label}</span>
}