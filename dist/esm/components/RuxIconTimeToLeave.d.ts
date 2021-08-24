import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTimeToLeaveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTimeToLeave["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTimeToLeave["size"];
}
interface RuxIconTimeToLeaveEvents {
}
interface RuxIconTimeToLeaveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTimeToLeave extends SvelteComponent {
    $$prop_def: RuxIconTimeToLeaveProps;
    $$events_def: RuxIconTimeToLeaveEvents;
    $$slot_def: RuxIconTimeToLeaveSlots;
    $on<K extends keyof RuxIconTimeToLeaveEvents>(type: K, callback: (e: RuxIconTimeToLeaveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTimeToLeaveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTimeToLeaveElement | undefined;
}
export default RuxIconTimeToLeave;
