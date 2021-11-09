import { forecastServices } from '@/services/forecastsServices';
import moment from 'moment';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  userInput: string = "";
  results: server.WeatherForecast[] = [];

  async test() {
    this.results = await forecastServices.GetForecasts()
  }

  async mounted() {
    await this.test();
  }

  formatDate(value: string){
    return moment(value).format('L');
  }
}


export const test: number = 5;