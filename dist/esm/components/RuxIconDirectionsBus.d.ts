import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsBusProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirectionsBus["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirectionsBus["size"];
}
interface RuxIconDirectionsBusEvents {
}
interface RuxIconDirectionsBusSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirectionsBus extends SvelteComponent {
    $$prop_def: RuxIconDirectionsBusProps;
    $$events_def: RuxIconDirectionsBusEvents;
    $$slot_def: RuxIconDirectionsBusSlots;
    $on<K extends keyof RuxIconDirectionsBusEvents>(type: K, callback: (e: RuxIconDirectionsBusEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsBusProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsBusElement | undefined;
}
export default RuxIconDirectionsBus;
