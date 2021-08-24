import { Components } from '@astrouxds/astro-web-components';
interface RuxIcon360Props {
    /** The fill color for the icon */
    color?: Components.RuxIcon360["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIcon360["size"];
}
interface RuxIcon360Events {
}
interface RuxIcon360Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIcon360 extends SvelteComponent {
    $$prop_def: RuxIcon360Props;
    $$events_def: RuxIcon360Events;
    $$slot_def: RuxIcon360Slots;
    $on<K extends keyof RuxIcon360Events>(type: K, callback: (e: RuxIcon360Events[K]) => any): () => void;
    $set($$props: Partial<RuxIcon360Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIcon360Element | undefined;
}
export default RuxIcon360;
