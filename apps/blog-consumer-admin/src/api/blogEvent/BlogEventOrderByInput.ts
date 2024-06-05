import { SortOrder } from "../../util/SortOrder";

export type BlogEventOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
