import {Vue} from 'vue-property-decorator';
import Component from "vue-class-component";
import router from './router';
import $ from 'jquery';

@Component
export default class AppController extends Vue {

  private inClass: string = "slideInRight";
  private outClass: string = "slideOutLeft";

  public mounted(): void {
    router.beforeEach((to: any, from: any, next: any) => {
      next();
    });
  }
}
