import { LightningElement } from "lwc";
import { MyMixin } from "./myMixin.js";

export default class MixinExample extends MyMixin(LightningElement) {
  name = "I am a mixin example!";

  get upperCaseName() {
    return this.getUpperCaseName();
  }
}
