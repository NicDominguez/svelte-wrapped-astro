import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFiberManualRecordProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFiberManualRecord["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFiberManualRecord["size"];
}
interface RuxIconFiberManualRecordEvents {
}
interface RuxIconFiberManualRecordSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFiberManualRecord extends SvelteComponent {
    $$prop_def: RuxIconFiberManualRecordProps;
    $$events_def: RuxIconFiberManualRecordEvents;
    $$slot_def: RuxIconFiberManualRecordSlots;
    $on<K extends keyof RuxIconFiberManualRecordEvents>(type: K, callback: (e: RuxIconFiberManualRecordEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFiberManualRecordProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFiberManualRecordElement | undefined;
}
export default RuxIconFiberManualRecord;
