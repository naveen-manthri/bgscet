export interface PlacementOfferDepartment {
  name: string;
  percentage: number;
}

export interface PlacementOffersData {
  subtitle: string;
  title: string;
  departments: PlacementOfferDepartment[];
  totalOffers: number;
  note: string;
}
