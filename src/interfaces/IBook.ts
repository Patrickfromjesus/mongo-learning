import { ObjectID } from 'bson'

export default interface IBook {
  _id: ObjectID;
  title: string;
  isbn: string;
  pageCount: number;
  publishedDate: { $date: string };
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
}
