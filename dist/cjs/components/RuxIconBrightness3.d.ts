import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightness3Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightness3["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightness3["size"];
}
interface RuxIconBrightness3Events {
}
interface RuxIconBrightness3Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightness3 extends SvelteComponent {
    $$prop_def: RuxIconBrightness3Props;
    $$events_def: RuxIconBrightness3Events;
    $$slot_def: RuxIconBrightness3Slots;
    $on<K extends keyof RuxIconBrightness3Events>(type: K, callback: (e: RuxIconBrightness3Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightness3Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightness3Element | undefined;
}
export default RuxIconBrightness3;
