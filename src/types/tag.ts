export interface ITag {
  id?: string;
  name?: string;
  value?: string[] | number[];
  placeholder?: string;
  separator?: string | string[];
  maxTags?: number;
}
