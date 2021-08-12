import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export interface ContentInputProps extends HTMLAttributes<HTMLDivElement> {
  error?: string;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  error?: string;
  mask?: string | Array<(string | RegExp)>;
  maskPlaceholder?: string | null | undefined;
  alwaysShowMask?: boolean | undefined;
  inputRef?: React.Ref<HTMLInputElement> | undefined;
  onChangeValue: (value: string, name: string) => void;
};