import { Components } from '@astrouxds/astro-web-components';
interface RuxIconChangeHistoryProps {
    /** The fill color for the icon */
    color?: Components.RuxIconChangeHistory["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconChangeHistory["size"];
}
interface RuxIconChangeHistoryEvents {
}
interface RuxIconChangeHistorySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconChangeHistory extends SvelteComponent {
    $$prop_def: RuxIconChangeHistoryProps;
    $$events_def: RuxIconChangeHistoryEvents;
    $$slot_def: RuxIconChangeHistorySlots;
    $on<K extends keyof RuxIconChangeHistoryEvents>(type: K, callback: (e: RuxIconChangeHistoryEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconChangeHistoryProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconChangeHistoryElement | undefined;
}
export default RuxIconChangeHistory;
