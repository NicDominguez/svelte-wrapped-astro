import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDeleteForeverProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDeleteForever["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDeleteForever["size"];
}
interface RuxIconDeleteForeverEvents {
}
interface RuxIconDeleteForeverSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDeleteForever extends SvelteComponent {
    $$prop_def: RuxIconDeleteForeverProps;
    $$events_def: RuxIconDeleteForeverEvents;
    $$slot_def: RuxIconDeleteForeverSlots;
    $on<K extends keyof RuxIconDeleteForeverEvents>(type: K, callback: (e: RuxIconDeleteForeverEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDeleteForeverProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDeleteForeverElement | undefined;
}
export default RuxIconDeleteForever;
