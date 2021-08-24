import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAssignmentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAssignment["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAssignment["size"];
}
interface RuxIconAssignmentEvents {
}
interface RuxIconAssignmentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAssignment extends SvelteComponent {
    $$prop_def: RuxIconAssignmentProps;
    $$events_def: RuxIconAssignmentEvents;
    $$slot_def: RuxIconAssignmentSlots;
    $on<K extends keyof RuxIconAssignmentEvents>(type: K, callback: (e: RuxIconAssignmentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAssignmentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAssignmentElement | undefined;
}
export default RuxIconAssignment;
