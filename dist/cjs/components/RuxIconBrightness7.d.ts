import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightness7Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightness7["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightness7["size"];
}
interface RuxIconBrightness7Events {
}
interface RuxIconBrightness7Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightness7 extends SvelteComponent {
    $$prop_def: RuxIconBrightness7Props;
    $$events_def: RuxIconBrightness7Events;
    $$slot_def: RuxIconBrightness7Slots;
    $on<K extends keyof RuxIconBrightness7Events>(type: K, callback: (e: RuxIconBrightness7Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightness7Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightness7Element | undefined;
}
export default RuxIconBrightness7;
