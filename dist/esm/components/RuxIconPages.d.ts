import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPagesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPages["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPages["size"];
}
interface RuxIconPagesEvents {
}
interface RuxIconPagesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPages extends SvelteComponent {
    $$prop_def: RuxIconPagesProps;
    $$events_def: RuxIconPagesEvents;
    $$slot_def: RuxIconPagesSlots;
    $on<K extends keyof RuxIconPagesEvents>(type: K, callback: (e: RuxIconPagesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPagesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPagesElement | undefined;
}
export default RuxIconPages;
