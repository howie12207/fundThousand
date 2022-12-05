import { useState, useImperativeHandle, forwardRef, Ref } from 'react';
import { Fade } from '@mui/material';

type BaseInputProps = {
    type?: React.HTMLInputTypeAttribute;
    inputmode?: React.HTMLAttributes<HTMLLIElement>['inputMode'];
    value: string;
    label?: string;
    id: string;
    setValue: (value: string) => void;
    isValid: boolean;
    setIsValid: (value: boolean) => void;
    rules: Array<{ validate: (value: string) => boolean; message: string }>;
    upperCase?: boolean;
    maxlength?: number;
    immediate?: boolean;
    children?: JSX.Element;
    disabled?: boolean;
    placeholder?: string;
    isFocus?: boolean;
    setIsFocus?: (value: boolean) => void;
};
export type BaseInputRef = {
    validateNow: () => void;
    resetField: () => void;
};
const baseInput = (
    {
        type = 'text',
        inputmode,
        label,
        value,
        id,
        setValue,
        isValid,
        setIsValid,
        rules = [],
        upperCase = false,
        maxlength,
        immediate = false,
        children,
        disabled = false,
        placeholder = '',
        setIsFocus,
    }: BaseInputProps,
    ref: Ref<BaseInputRef>
) => {
    const [isBlured, setIsBlured] = useState(false);
    const [message, setMessage] = useState('');

    const blurHandle = () => {
        setIsBlured(true);
        if (setIsFocus) setIsFocus(false);
        validate();
    };
    const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        if (upperCase) inputValue = inputValue.toUpperCase();
        setValue(inputValue);
        if (immediate || isBlured) validate(inputValue);
    };
    const focusHandle = () => {
        if (setIsFocus) setIsFocus(true);
    };
    const validate = (modalValue = value) => {
        if (rules.length === 0) {
            setIsValid(true);
            return true;
        }
        for (const item of rules) {
            const valid = item.validate(modalValue);
            if (valid) continue;
            setMessage(item.message);
            setIsValid(false);
            return false;
        }
        setIsValid(true);
        return true;
    };
    const validateNow = (modalValue = value) => {
        const res = validate(modalValue);
        setIsBlured(true);
        return res;
    };
    const resetField = () => {
        setValue('');
        setIsValid(false);
        setIsBlured(false);
    };

    useImperativeHandle(ref, () => {
        return {
            validateNow,
            resetField,
        };
    });

    return (
        <div className={[(!isValid && isBlured && 'error-item') || ''].join(' ')}>
            <div>
                {label && (
                    <label htmlFor={id} className="mb-1 inline-block text-gray-700">
                        {label}
                    </label>
                )}
                <div className="sm:flex">
                    <input
                        className={[
                            'h-10 w-full rounded border px-3 outline-none transition focus:border-blue-700 disabled:bg-gray-300',
                            (!isValid && isBlured && '!border-red-500') || '',
                        ].join(' ')}
                        type={type}
                        id={id}
                        value={value}
                        onBlur={blurHandle}
                        onInput={inputHandle}
                        onFocus={focusHandle}
                        {...(disabled ? { disabled } : {})}
                        {...(inputmode ? { inputMode: inputmode } : {})}
                        {...(maxlength ? { maxLength: maxlength } : {})}
                        {...(placeholder ? { placeholder } : {})}
                    />
                    {children}
                </div>
            </div>
            <Fade in={!isValid && isBlured}>
                <div className="my-1 min-h-[20px] text-sm text-red-500">{message}</div>
            </Fade>
        </div>
    );
};

export const BaseInput = forwardRef(baseInput);
