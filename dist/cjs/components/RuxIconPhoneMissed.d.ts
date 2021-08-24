import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhoneMissedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhoneMissed["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhoneMissed["size"];
}
interface RuxIconPhoneMissedEvents {
}
interface RuxIconPhoneMissedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhoneMissed extends SvelteComponent {
    $$prop_def: RuxIconPhoneMissedProps;
    $$events_def: RuxIconPhoneMissedEvents;
    $$slot_def: RuxIconPhoneMissedSlots;
    $on<K extends keyof RuxIconPhoneMissedEvents>(type: K, callback: (e: RuxIconPhoneMissedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhoneMissedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhoneMissedElement | undefined;
}
export default RuxIconPhoneMissed;
