import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDetailsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDetails["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDetails["size"];
}
interface RuxIconDetailsEvents {
}
interface RuxIconDetailsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDetails extends SvelteComponent {
    $$prop_def: RuxIconDetailsProps;
    $$events_def: RuxIconDetailsEvents;
    $$slot_def: RuxIconDetailsSlots;
    $on<K extends keyof RuxIconDetailsEvents>(type: K, callback: (e: RuxIconDetailsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDetailsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDetailsElement | undefined;
}
export default RuxIconDetails;
