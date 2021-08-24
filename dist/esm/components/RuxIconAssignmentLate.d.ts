import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAssignmentLateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAssignmentLate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAssignmentLate["size"];
}
interface RuxIconAssignmentLateEvents {
}
interface RuxIconAssignmentLateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAssignmentLate extends SvelteComponent {
    $$prop_def: RuxIconAssignmentLateProps;
    $$events_def: RuxIconAssignmentLateEvents;
    $$slot_def: RuxIconAssignmentLateSlots;
    $on<K extends keyof RuxIconAssignmentLateEvents>(type: K, callback: (e: RuxIconAssignmentLateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAssignmentLateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAssignmentLateElement | undefined;
}
export default RuxIconAssignmentLate;
