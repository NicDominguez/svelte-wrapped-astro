import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMoodProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMood["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMood["size"];
}
interface RuxIconMoodEvents {
}
interface RuxIconMoodSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMood extends SvelteComponent {
    $$prop_def: RuxIconMoodProps;
    $$events_def: RuxIconMoodEvents;
    $$slot_def: RuxIconMoodSlots;
    $on<K extends keyof RuxIconMoodEvents>(type: K, callback: (e: RuxIconMoodEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMoodProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMoodElement | undefined;
}
export default RuxIconMood;
