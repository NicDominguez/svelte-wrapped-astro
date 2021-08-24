import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNetcomProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNetcom["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNetcom["size"];
}
interface RuxIconNetcomEvents {
}
interface RuxIconNetcomSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNetcom extends SvelteComponent {
    $$prop_def: RuxIconNetcomProps;
    $$events_def: RuxIconNetcomEvents;
    $$slot_def: RuxIconNetcomSlots;
    $on<K extends keyof RuxIconNetcomEvents>(type: K, callback: (e: RuxIconNetcomEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNetcomProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNetcomElement | undefined;
}
export default RuxIconNetcom;
