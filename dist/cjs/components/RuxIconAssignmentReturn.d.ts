import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAssignmentReturnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAssignmentReturn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAssignmentReturn["size"];
}
interface RuxIconAssignmentReturnEvents {
}
interface RuxIconAssignmentReturnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAssignmentReturn extends SvelteComponent {
    $$prop_def: RuxIconAssignmentReturnProps;
    $$events_def: RuxIconAssignmentReturnEvents;
    $$slot_def: RuxIconAssignmentReturnSlots;
    $on<K extends keyof RuxIconAssignmentReturnEvents>(type: K, callback: (e: RuxIconAssignmentReturnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAssignmentReturnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAssignmentReturnElement | undefined;
}
export default RuxIconAssignmentReturn;
