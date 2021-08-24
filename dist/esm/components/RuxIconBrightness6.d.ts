import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightness6Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightness6["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightness6["size"];
}
interface RuxIconBrightness6Events {
}
interface RuxIconBrightness6Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightness6 extends SvelteComponent {
    $$prop_def: RuxIconBrightness6Props;
    $$events_def: RuxIconBrightness6Events;
    $$slot_def: RuxIconBrightness6Slots;
    $on<K extends keyof RuxIconBrightness6Events>(type: K, callback: (e: RuxIconBrightness6Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightness6Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightness6Element | undefined;
}
export default RuxIconBrightness6;
