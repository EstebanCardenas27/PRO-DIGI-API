export interface FilterValues {
  type: string[];
  field: string[];
  attribute: string[];
  name?: string;
  level?: string;
  sortBy?: "name" | "id" | "level";
}
