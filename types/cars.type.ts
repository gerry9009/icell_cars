export type Position = {
  gps_fix: boolean;
  country?: string;
  city?: string;
  gps_lat: number;
  gps_lon: number;
  gps_alt?: number;
  gps_speed: number;
  gps_heading?: number;
  total_dist?: number;
  milage?: number;
  ign?: boolean;
  t: string; // ISO timestamp
  road?: string;
};

export type Car = {
  license_no: string;
  positions: Position[];
};

export type Cars = Car[] | null;
