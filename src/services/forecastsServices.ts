import { Settings } from "@/Settings";
import Axios, { AxiosInstance } from "axios";


class ForecastServices {

  private http: AxiosInstance;

  constructor() {
    this.http = Axios.create();
  }


  public async GetForecasts(): Promise<server.WeatherForecast[]> {

    let uri = Settings.serverUri + `/api/forecasts`;
    let response = await this.http.get(uri, {});
    if (response.status >= 200 && response.status < 300)
      return response.data as server.WeatherForecast[];

    throw { message: "invalid response", status: response.status };
  }
}

export const forecastServices = new ForecastServices();