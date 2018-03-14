import { Listing } from './listing';

export class ListingResponse {
  country: string;
  area_name: string;
  listing: Listing[];
  result_count: number;
}
