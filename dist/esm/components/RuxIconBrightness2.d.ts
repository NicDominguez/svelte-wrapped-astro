import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightness2Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightness2["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightness2["size"];
}
interface RuxIconBrightness2Events {
}
interface RuxIconBrightness2Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightness2 extends SvelteComponent {
    $$prop_def: RuxIconBrightness2Props;
    $$events_def: RuxIconBrightness2Events;
    $$slot_def: RuxIconBrightness2Slots;
    $on<K extends keyof RuxIconBrightness2Events>(type: K, callback: (e: RuxIconBrightness2Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightness2Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightness2Element | undefined;
}
export default RuxIconBrightness2;
