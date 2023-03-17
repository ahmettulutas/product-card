export const
  enums = {
    status: {
      success: "SUCCESS",
      error: "Error"
    },
    langs: {
      tr: "tr",
      en: "en"
    },
    sortDirections: {
      Ascending: "asc",
      Descending: "desc"
    }
  } as const;

type EnumTypeGenerator<T extends object> = T[keyof T];
type TEnums = typeof enums;

export type Enums = {
  [key in keyof TEnums]: EnumTypeGenerator<TEnums[key]>
}

// function(name: Enums["status"])
// function(enums.status.error)