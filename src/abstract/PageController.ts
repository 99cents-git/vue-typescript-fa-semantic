import {Prop, Vue} from 'vue-property-decorator';
import Component from "vue-class-component";
import $ from 'jquery';

@Component
export default class PageController extends Vue {

  @Prop() protected pageData: any;

  protected beforeCreate(_meta: any): void {
    console.log('beforeCreate >>');
  }

  protected created(): void {
    console.log('created >>');
  }

  protected beforeMount(): void {
    console.log('beforeMount >>');
  }

  protected mounted(): void {
    console.log('mounted >>');
  }

  protected beforeDestroy(): void {
    console.log('beforeDestroy >>');
  }

  protected destroyed(): void {
    console.log('destroyed >>');
  }
}