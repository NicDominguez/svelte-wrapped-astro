import { Components } from '@astrouxds/astro-web-components';
interface RuxIconIsoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconIso["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconIso["size"];
}
interface RuxIconIsoEvents {
}
interface RuxIconIsoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconIso extends SvelteComponent {
    $$prop_def: RuxIconIsoProps;
    $$events_def: RuxIconIsoEvents;
    $$slot_def: RuxIconIsoSlots;
    $on<K extends keyof RuxIconIsoEvents>(type: K, callback: (e: RuxIconIsoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconIsoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconIsoElement | undefined;
}
export default RuxIconIso;
