import { Components } from '@astrouxds/astro-web-components';
interface RuxIcon4kProps {
    /** The fill color for the icon */
    color?: Components.RuxIcon4k["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIcon4k["size"];
}
interface RuxIcon4kEvents {
}
interface RuxIcon4kSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIcon4k extends SvelteComponent {
    $$prop_def: RuxIcon4kProps;
    $$events_def: RuxIcon4kEvents;
    $$slot_def: RuxIcon4kSlots;
    $on<K extends keyof RuxIcon4kEvents>(type: K, callback: (e: RuxIcon4kEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIcon4kProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIcon4kElement | undefined;
}
export default RuxIcon4k;
