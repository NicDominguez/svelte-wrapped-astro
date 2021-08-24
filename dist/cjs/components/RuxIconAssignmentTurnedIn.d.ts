import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAssignmentTurnedInProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAssignmentTurnedIn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAssignmentTurnedIn["size"];
}
interface RuxIconAssignmentTurnedInEvents {
}
interface RuxIconAssignmentTurnedInSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAssignmentTurnedIn extends SvelteComponent {
    $$prop_def: RuxIconAssignmentTurnedInProps;
    $$events_def: RuxIconAssignmentTurnedInEvents;
    $$slot_def: RuxIconAssignmentTurnedInSlots;
    $on<K extends keyof RuxIconAssignmentTurnedInEvents>(type: K, callback: (e: RuxIconAssignmentTurnedInEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAssignmentTurnedInProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAssignmentTurnedInElement | undefined;
}
export default RuxIconAssignmentTurnedIn;
