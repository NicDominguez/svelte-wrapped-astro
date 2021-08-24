import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightness5Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightness5["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightness5["size"];
}
interface RuxIconBrightness5Events {
}
interface RuxIconBrightness5Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightness5 extends SvelteComponent {
    $$prop_def: RuxIconBrightness5Props;
    $$events_def: RuxIconBrightness5Events;
    $$slot_def: RuxIconBrightness5Slots;
    $on<K extends keyof RuxIconBrightness5Events>(type: K, callback: (e: RuxIconBrightness5Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightness5Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightness5Element | undefined;
}
export default RuxIconBrightness5;
