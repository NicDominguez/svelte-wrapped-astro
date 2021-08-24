import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAssignmentReturnedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAssignmentReturned["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAssignmentReturned["size"];
}
interface RuxIconAssignmentReturnedEvents {
}
interface RuxIconAssignmentReturnedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAssignmentReturned extends SvelteComponent {
    $$prop_def: RuxIconAssignmentReturnedProps;
    $$events_def: RuxIconAssignmentReturnedEvents;
    $$slot_def: RuxIconAssignmentReturnedSlots;
    $on<K extends keyof RuxIconAssignmentReturnedEvents>(type: K, callback: (e: RuxIconAssignmentReturnedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAssignmentReturnedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAssignmentReturnedElement | undefined;
}
export default RuxIconAssignmentReturned;
