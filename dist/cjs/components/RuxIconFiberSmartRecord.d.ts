import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFiberSmartRecordProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFiberSmartRecord["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFiberSmartRecord["size"];
}
interface RuxIconFiberSmartRecordEvents {
}
interface RuxIconFiberSmartRecordSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFiberSmartRecord extends SvelteComponent {
    $$prop_def: RuxIconFiberSmartRecordProps;
    $$events_def: RuxIconFiberSmartRecordEvents;
    $$slot_def: RuxIconFiberSmartRecordSlots;
    $on<K extends keyof RuxIconFiberSmartRecordEvents>(type: K, callback: (e: RuxIconFiberSmartRecordEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFiberSmartRecordProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFiberSmartRecordElement | undefined;
}
export default RuxIconFiberSmartRecord;
