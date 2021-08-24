import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMoreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMore["size"];
}
interface RuxIconMoreEvents {
}
interface RuxIconMoreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMore extends SvelteComponent {
    $$prop_def: RuxIconMoreProps;
    $$events_def: RuxIconMoreEvents;
    $$slot_def: RuxIconMoreSlots;
    $on<K extends keyof RuxIconMoreEvents>(type: K, callback: (e: RuxIconMoreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMoreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMoreElement | undefined;
}
export default RuxIconMore;
