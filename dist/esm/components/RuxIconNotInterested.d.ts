import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNotInterestedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNotInterested["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNotInterested["size"];
}
interface RuxIconNotInterestedEvents {
}
interface RuxIconNotInterestedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNotInterested extends SvelteComponent {
    $$prop_def: RuxIconNotInterestedProps;
    $$events_def: RuxIconNotInterestedEvents;
    $$slot_def: RuxIconNotInterestedSlots;
    $on<K extends keyof RuxIconNotInterestedEvents>(type: K, callback: (e: RuxIconNotInterestedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNotInterestedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNotInterestedElement | undefined;
}
export default RuxIconNotInterested;
