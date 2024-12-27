import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountriesService {
  private readonly dateNagerApi = 'https://date.nager.at/api/v3';
  private readonly countriesNowApi =
    'https://countriesnow.space/api/v0.1/countries';

  async getAvailableCountries() {
    try {
      const response = await axios.get(
        `${this.dateNagerApi}/AvailableCountries`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch countries: ${error.message}`);
    }
  }

  async getCountryInfo(countryCode: string) {
    try {
      const countryData = await axios.get(
        `${this.dateNagerApi}/CountryInfo/${countryCode}`,
      );

      const [populationResponse, flagResponse] = await Promise.all([
        axios.post(`${this.countriesNowApi}/population`, {
          country: countryData.data.commonName,
        }),
        axios.post(`${this.countriesNowApi}/flag/images`, {
          country: countryData.data.commonName,
        }),
      ]);
      const populationData =
        populationResponse.data.data.populationCounts || [];

      const flagUrl = flagResponse.data.data.flag || null;

      return {
        ...countryData.data,
        population: populationData,
        flagUrl,
      };
    } catch (error) {
      throw new HttpException(
        `Failed to fetch country details: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
