import { Listing } from './listing';

export class ListingResponse {
  country: string;
  area_name: string;
  apartments: Listing[];
  result_count: number;
}
