import { PluginObject } from 'vue'

export interface Options {
  group: string;
  position?: 'top' | 'bottom';
  type: string;
  title: string;
  text: string;
}

type NotifyFunction = {
  (e: Options, timeout?: number): () => void;
}

declare const _default: PluginObject<ScrollOptions> & {
  notify: NotifyFunction
};

export default _default

declare module "vue/types/vue" {
  interface Vue {
    $notify: notify
  }
}