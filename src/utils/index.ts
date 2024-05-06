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

export const mapAttributeValues = (data: AttributeType): AttributesListType[] => {
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