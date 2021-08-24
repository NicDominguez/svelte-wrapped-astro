import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTocProps {
    /** The fill color for the icon */
    color?: Components.RuxIconToc["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconToc["size"];
}
interface RuxIconTocEvents {
}
interface RuxIconTocSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconToc extends SvelteComponent {
    $$prop_def: RuxIconTocProps;
    $$events_def: RuxIconTocEvents;
    $$slot_def: RuxIconTocSlots;
    $on<K extends keyof RuxIconTocEvents>(type: K, callback: (e: RuxIconTocEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTocProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTocElement | undefined;
}
export default RuxIconToc;
