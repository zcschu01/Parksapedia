export interface Park {
  total: string;
  data: ParkData[];
  limit: string;
  start: string;
}

export interface ParkData {
  activities: Activity[];
  addresses: Address[];
  contacts: Contact;
  description: string;
  designation: string;
  directionsInfo: string;
  directionsUrl: string;
  entranceFees: EntranceFee[];
  entrancePasses: EntranceFee[];
  fullName: string;
  id: string;
  images: Image[];
  latLong: string;
  multimedia: Multimedia[];
  name: string;
  operatingHours: OperatingHour[];
  parkCode: string;
  relevanceScore: number;
  states: string;
  topics: Activity[];
  url: string;
  weatherInfo: string;
}

export interface OperatingHour {
  name: string;
  description: string;
  standardHours: StandardHour;
  exceptions: Exception[];
}

export interface Exception {
  name: string;
  startDate: string;
  endDate: string;
  exceptionHours: StandardHour;
}

export interface StandardHour {
  sunday?: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
}

export interface Multimedia {
  title: string;
  id: string;
  type: string;
  url: string;
}

export interface Image {
  credit: string;
  altText: string;
  title: string;
  id?: string;
  caption: string;
  url: string;
}

export interface EntranceFee {
  cost: string;
  description: string;
  title: string;
}

export interface Contact {
  phoneNumbers: PhoneNumber[];
  emailAddresses: EmailAddress[];
}

export interface EmailAddress {
  emailAddress: string;
  description: string;
}

export interface PhoneNumber {
  phoneNumber: string;
  description: string;
  extension: string;
  type: string;
}

export interface Address {
  line1: string;
  line2: string;
  line3: string;
  city: string;
  stateCode: string;
  countryCode: string;
  provinceTerritoryCode: string;
  postalCode: string;
  type: string;
}

export interface Activity {
  id: string;
  name: string;
}