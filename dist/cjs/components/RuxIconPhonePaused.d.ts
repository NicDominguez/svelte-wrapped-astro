import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhonePausedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhonePaused["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhonePaused["size"];
}
interface RuxIconPhonePausedEvents {
}
interface RuxIconPhonePausedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhonePaused extends SvelteComponent {
    $$prop_def: RuxIconPhonePausedProps;
    $$events_def: RuxIconPhonePausedEvents;
    $$slot_def: RuxIconPhonePausedSlots;
    $on<K extends keyof RuxIconPhonePausedEvents>(type: K, callback: (e: RuxIconPhonePausedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhonePausedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhonePausedElement | undefined;
}
export default RuxIconPhonePaused;
