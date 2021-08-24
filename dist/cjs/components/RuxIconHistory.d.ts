import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHistoryProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHistory["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHistory["size"];
}
interface RuxIconHistoryEvents {
}
interface RuxIconHistorySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHistory extends SvelteComponent {
    $$prop_def: RuxIconHistoryProps;
    $$events_def: RuxIconHistoryEvents;
    $$slot_def: RuxIconHistorySlots;
    $on<K extends keyof RuxIconHistoryEvents>(type: K, callback: (e: RuxIconHistoryEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHistoryProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHistoryElement | undefined;
}
export default RuxIconHistory;
