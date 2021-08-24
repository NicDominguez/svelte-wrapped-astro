import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsBikeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirectionsBike["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirectionsBike["size"];
}
interface RuxIconDirectionsBikeEvents {
}
interface RuxIconDirectionsBikeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirectionsBike extends SvelteComponent {
    $$prop_def: RuxIconDirectionsBikeProps;
    $$events_def: RuxIconDirectionsBikeEvents;
    $$slot_def: RuxIconDirectionsBikeSlots;
    $on<K extends keyof RuxIconDirectionsBikeEvents>(type: K, callback: (e: RuxIconDirectionsBikeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsBikeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsBikeElement | undefined;
}
export default RuxIconDirectionsBike;
