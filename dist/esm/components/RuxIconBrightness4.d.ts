import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightness4Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightness4["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightness4["size"];
}
interface RuxIconBrightness4Events {
}
interface RuxIconBrightness4Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightness4 extends SvelteComponent {
    $$prop_def: RuxIconBrightness4Props;
    $$events_def: RuxIconBrightness4Events;
    $$slot_def: RuxIconBrightness4Slots;
    $on<K extends keyof RuxIconBrightness4Events>(type: K, callback: (e: RuxIconBrightness4Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightness4Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightness4Element | undefined;
}
export default RuxIconBrightness4;
