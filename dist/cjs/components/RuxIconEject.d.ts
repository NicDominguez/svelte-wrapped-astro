import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEjectProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEject["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEject["size"];
}
interface RuxIconEjectEvents {
}
interface RuxIconEjectSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEject extends SvelteComponent {
    $$prop_def: RuxIconEjectProps;
    $$events_def: RuxIconEjectEvents;
    $$slot_def: RuxIconEjectSlots;
    $on<K extends keyof RuxIconEjectEvents>(type: K, callback: (e: RuxIconEjectEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEjectProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEjectElement | undefined;
}
export default RuxIconEject;
