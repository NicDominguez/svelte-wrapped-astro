import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArchiveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArchive["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArchive["size"];
}
interface RuxIconArchiveEvents {
}
interface RuxIconArchiveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArchive extends SvelteComponent {
    $$prop_def: RuxIconArchiveProps;
    $$events_def: RuxIconArchiveEvents;
    $$slot_def: RuxIconArchiveSlots;
    $on<K extends keyof RuxIconArchiveEvents>(type: K, callback: (e: RuxIconArchiveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArchiveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArchiveElement | undefined;
}
export default RuxIconArchive;
