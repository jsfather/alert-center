import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const persianToEnglish: { [key: string]: string } = {
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',
};

const arabicToEnglish: { [key: string]: string } = {
  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
};

export const convertToEnglishNumbers = (input: string): string => {
  return input
    .replace(/[۰-۹]/g, (match) => persianToEnglish[match] || match)
    .replace(/[٠-٩]/g, (match) => arabicToEnglish[match] || match);
};

export const convertToPersianNumbers = (input: string): string => {
  const englishToPersian: { [key: string]: string } = {
    '0': '۰',
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
  };

  return input.replace(/[0-9]/g, (match) => englishToPersian[match] || match);
};

export const convertToArabicNumbers = (input: string): string => {
  const englishToArabic: { [key: string]: string } = {
    '0': '٠',
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
  };

  return input.replace(/[0-9]/g, (match) => englishToArabic[match] || match);
};

export const hasPersianNumbers = (input: string): boolean => {
  return /[۰-۹]/.test(input);
};

export const hasArabicNumbers = (input: string): boolean => {
  return /[٠-٩]/.test(input);
};

export const hasNonEnglishNumbers = (input: string): boolean => {
  return hasPersianNumbers(input) || hasArabicNumbers(input);
};

export const extractEnglishNumbers = (input: string): string[] => {
  const converted = convertToEnglishNumbers(input);
  return converted.match(/\d/g) || [];
};

export { persianToEnglish, arabicToEnglish };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
