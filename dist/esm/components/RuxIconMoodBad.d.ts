import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMoodBadProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMoodBad["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMoodBad["size"];
}
interface RuxIconMoodBadEvents {
}
interface RuxIconMoodBadSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMoodBad extends SvelteComponent {
    $$prop_def: RuxIconMoodBadProps;
    $$events_def: RuxIconMoodBadEvents;
    $$slot_def: RuxIconMoodBadSlots;
    $on<K extends keyof RuxIconMoodBadEvents>(type: K, callback: (e: RuxIconMoodBadEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMoodBadProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMoodBadElement | undefined;
}
export default RuxIconMoodBad;
