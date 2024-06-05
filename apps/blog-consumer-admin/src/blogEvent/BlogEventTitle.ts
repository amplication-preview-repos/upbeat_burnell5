import { BlogEvent as TBlogEvent } from "../api/blogEvent/BlogEvent";

export const BLOGEVENT_TITLE_FIELD = "id";

export const BlogEventTitle = (record: TBlogEvent): string => {
  return record.id?.toString() || String(record.id);
};
