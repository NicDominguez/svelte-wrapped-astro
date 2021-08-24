import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPermMediaProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPermMedia["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPermMedia["size"];
}
interface RuxIconPermMediaEvents {
}
interface RuxIconPermMediaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPermMedia extends SvelteComponent {
    $$prop_def: RuxIconPermMediaProps;
    $$events_def: RuxIconPermMediaEvents;
    $$slot_def: RuxIconPermMediaSlots;
    $on<K extends keyof RuxIconPermMediaEvents>(type: K, callback: (e: RuxIconPermMediaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPermMediaProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPermMediaElement | undefined;
}
export default RuxIconPermMedia;
