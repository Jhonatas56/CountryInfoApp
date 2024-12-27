import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountriesService {
  private readonly dateNagerApi = 'https://date.nager.at/api/v3';

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
}
