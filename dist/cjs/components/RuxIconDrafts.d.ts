import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDraftsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDrafts["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDrafts["size"];
}
interface RuxIconDraftsEvents {
}
interface RuxIconDraftsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDrafts extends SvelteComponent {
    $$prop_def: RuxIconDraftsProps;
    $$events_def: RuxIconDraftsEvents;
    $$slot_def: RuxIconDraftsSlots;
    $on<K extends keyof RuxIconDraftsEvents>(type: K, callback: (e: RuxIconDraftsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDraftsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDraftsElement | undefined;
}
export default RuxIconDrafts;
