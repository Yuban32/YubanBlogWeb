import Dialog from "./Dialog.vue";

Dialog.install = function (Vue,options){
    Vue.component(`${Dialog.name}`,Dialog);
}
export default Dialog;