import {Emit, Prop, Vue} from 'vue-property-decorator';
import Component from "vue-class-component";

declare var $: any;

@Component
export default class FormController extends Vue {

  @Prop() formData: any;
  private formValid: boolean = false;

  protected mounted(): void {
    if (this.formData && this.formData[`${this.$router.currentRoute.name}`]) {
      Object.entries(this.formData[`${this.$router.currentRoute.name}`]).forEach((_key) => {
        let _foundInput: any = $(`[name='${_key[0]}']`);
        let _foundValue: any = _key[1];
        _foundInput.val(_foundValue)
      });
    }
    $(document).foundation();
    $(document)
        .on("forminvalid.zf.abide", this.attachedFormInvalid)
        .on("formvalid.zf.abide", this.attachedFormValid)
        .on("submit", this.onSubmit);
  }

  public onSubmit(ev: any) {
    ev.preventDefault();
    this.attachedFormComplete(ev);
    console.log("submitting");
  }

  @Emit('step-valid')
  public attachedFormValid(ev: any, frm: any): void {
    console.log("Form is valid");
    this.formValid = true;
  }

  public attachedFormInvalid(ev: any, frm: any): void {
    console.log("form is invalid");
    this.formValid = false;
  }

  @Emit('step-done')
  public attachedFormComplete(ev: any): void {
    console.log("Form is complete");
  }

  public beforeDestroy(): void {
    console.log("unmounting");
    $(document)
        .off("forminvalid.zf.abide", this.attachedFormInvalid)
        .off("formvalid.zf.abide", this.attachedFormValid)
        .off("submit", this.onSubmit);
  }
}
