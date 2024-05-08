import { AttributeValue, AttributeType, AttributesListType } from "../types";

// Attributes helper functions
const isAttributeValue = (value: any): value is AttributeValue => {
  return (
    value &&
    typeof value === "object" &&
    "value" in value &&
    "confidence" in value
  );
};

export const mapAttributeValues = (
  data: AttributeType
): AttributesListType[] => {
  return Object.entries(data).reduce(
    (acc: AttributesListType[], [key, value]) => {
      if (isAttributeValue(value)) {
        return [
          ...acc,
          {
            attribute: key,
            value: value.value,
            confidence: value.confidence,
          },
        ];
      } else {
        return [...acc, ...mapAttributeValues(value)];
      }
    },
    []
  );
};


// Photo name truncation helper function
export const truncate = (str: string) => {
  if (str.length > 25) {
    const start = str.slice(0, 10);
    const end = str.slice(str.length - 10, str.length);
    return `${start}...${end}`;
  }
  return str;
}

// Snake to title helper function
export const snakeToTitle = (str: string) => {
  return str
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};