import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAssignmentFindProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAssignmentFind["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAssignmentFind["size"];
}
interface RuxIconAssignmentFindEvents {
}
interface RuxIconAssignmentFindSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAssignmentFind extends SvelteComponent {
    $$prop_def: RuxIconAssignmentFindProps;
    $$events_def: RuxIconAssignmentFindEvents;
    $$slot_def: RuxIconAssignmentFindSlots;
    $on<K extends keyof RuxIconAssignmentFindEvents>(type: K, callback: (e: RuxIconAssignmentFindEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAssignmentFindProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAssignmentFindElement | undefined;
}
export default RuxIconAssignmentFind;
