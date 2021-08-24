import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCastForEducationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCastForEducation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCastForEducation["size"];
}
interface RuxIconCastForEducationEvents {
}
interface RuxIconCastForEducationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCastForEducation extends SvelteComponent {
    $$prop_def: RuxIconCastForEducationProps;
    $$events_def: RuxIconCastForEducationEvents;
    $$slot_def: RuxIconCastForEducationSlots;
    $on<K extends keyof RuxIconCastForEducationEvents>(type: K, callback: (e: RuxIconCastForEducationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCastForEducationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCastForEducationElement | undefined;
}
export default RuxIconCastForEducation;
