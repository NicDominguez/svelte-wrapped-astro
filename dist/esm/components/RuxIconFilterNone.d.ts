import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterNoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilterNone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilterNone["size"];
}
interface RuxIconFilterNoneEvents {
}
interface RuxIconFilterNoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilterNone extends SvelteComponent {
    $$prop_def: RuxIconFilterNoneProps;
    $$events_def: RuxIconFilterNoneEvents;
    $$slot_def: RuxIconFilterNoneSlots;
    $on<K extends keyof RuxIconFilterNoneEvents>(type: K, callback: (e: RuxIconFilterNoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterNoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterNoneElement | undefined;
}
export default RuxIconFilterNone;
