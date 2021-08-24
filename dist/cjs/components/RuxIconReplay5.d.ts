import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReplay5Props {
    /** The fill color for the icon */
    color?: Components.RuxIconReplay5["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReplay5["size"];
}
interface RuxIconReplay5Events {
}
interface RuxIconReplay5Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReplay5 extends SvelteComponent {
    $$prop_def: RuxIconReplay5Props;
    $$events_def: RuxIconReplay5Events;
    $$slot_def: RuxIconReplay5Slots;
    $on<K extends keyof RuxIconReplay5Events>(type: K, callback: (e: RuxIconReplay5Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconReplay5Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReplay5Element | undefined;
}
export default RuxIconReplay5;
