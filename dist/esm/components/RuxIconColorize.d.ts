import { Components } from '@astrouxds/astro-web-components';
interface RuxIconColorizeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconColorize["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconColorize["size"];
}
interface RuxIconColorizeEvents {
}
interface RuxIconColorizeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconColorize extends SvelteComponent {
    $$prop_def: RuxIconColorizeProps;
    $$events_def: RuxIconColorizeEvents;
    $$slot_def: RuxIconColorizeSlots;
    $on<K extends keyof RuxIconColorizeEvents>(type: K, callback: (e: RuxIconColorizeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconColorizeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconColorizeElement | undefined;
}
export default RuxIconColorize;
