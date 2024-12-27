import { Controller, Get } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('get-available-countries')
  async getAvailableCountries() {
    return await this.countriesService.getAvailableCountries();
  }
}
