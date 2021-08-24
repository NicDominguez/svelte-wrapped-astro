import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCollectionsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCollections["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCollections["size"];
}
interface RuxIconCollectionsEvents {
}
interface RuxIconCollectionsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCollections extends SvelteComponent {
    $$prop_def: RuxIconCollectionsProps;
    $$events_def: RuxIconCollectionsEvents;
    $$slot_def: RuxIconCollectionsSlots;
    $on<K extends keyof RuxIconCollectionsEvents>(type: K, callback: (e: RuxIconCollectionsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCollectionsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCollectionsElement | undefined;
}
export default RuxIconCollections;
