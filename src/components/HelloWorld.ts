import { forecastServices } from '@/services/forecastsServices';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  async test(){
    let results = await forecastServices.GetForecasts()
  }

  mounted(){
    debugger
    this.test();
  }
}


export const test: number = 5;