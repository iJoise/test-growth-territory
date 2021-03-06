import axios from "axios";

const token = '4796a1d6394e4b8c879ae29cd0d5b46f0339c0ff'

const instance = axios.create({
   baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/',
   headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
   },
});

export const addressApi = {
   getAddress: async (query: string) => {
      const response = await instance.post<{suggestions: SuggestionsType[] }>('suggest/address?count=20', {query, count: 20})
      return response.data.suggestions
   }
}

export interface SuggestionsType {
   "value": string,
   "unrestricted_value": string,
   "data": {
      "postal_code": null,
      "country": string,
      "country_iso_code": string,
      "federal_district": null,
      "region_fias_id": string,
      "region_kladr_id": string,
      "region_iso_code": string,
      "region_with_type": string,
      "region_type": string,
      "region_type_full": string,
      "region": string,
      "area_fias_id": null,
      "area_kladr_id": null,
      "area_with_type": null,
      "area_type": null,
      "area_type_full": null,
      "area": null,
      "city_fias_id": string,
      "city_kladr_id": string,
      "city_with_type": string,
      "city_type": string,
      "city_type_full": string,
      "city": string,
      "city_area": null,
      "city_district_fias_id": null,
      "city_district_kladr_id": null,
      "city_district_with_type": null,
      "city_district_type": null,
      "city_district_type_full": null,
      "city_district": null,
      "settlement_fias_id": null,
      "settlement_kladr_id": null,
      "settlement_with_type": null,
      "settlement_type": null,
      "settlement_type_full": null,
      "settlement": null,
      "street_fias_id": string,
      "street_kladr_id": string,
      "street_with_type": string,
      "street_type": string,
      "street_type_full": string,
      "street": string,
      "house_fias_id": null,
      "house_kladr_id": null,
      "house_cadnum": null,
      "house_type": null,
      "house_type_full": null,
      "house": null,
      "block_type": null,
      "block_type_full": null,
      "block": null,
      "flat_fias_id": null,
      "flat_cadnum": null,
      "flat_type": null,
      "flat_type_full": null,
      "flat": null,
      "flat_area": null,
      "square_meter_price": null,
      "flat_price": null,
      "postal_box": null,
      "fias_id": string,
      "fias_code": null,
      "fias_level": "7",
      "fias_actuality_state": null,
      "kladr_id": string,
      "geoname_id": null,
      "capital_marker": string,
      "okato": string,
      "oktmo": string,
      "tax_office": string,
      "tax_office_legal": string,
      "timezone": null,
      "geo_lat": null,
      "geo_lon": null,
      "beltway_hit": null,
      "beltway_distance": null,
      "metro": null,
      "qc_geo": null,
      "qc_complete": null,
      "qc_house": null,
      "history_values": [],
      "unparsed_parts": null,
      "source": null,
      "qc": null
   }
}