import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhonelinkEraseProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhonelinkErase["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhonelinkErase["size"];
}
interface RuxIconPhonelinkEraseEvents {
}
interface RuxIconPhonelinkEraseSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhonelinkErase extends SvelteComponent {
    $$prop_def: RuxIconPhonelinkEraseProps;
    $$events_def: RuxIconPhonelinkEraseEvents;
    $$slot_def: RuxIconPhonelinkEraseSlots;
    $on<K extends keyof RuxIconPhonelinkEraseEvents>(type: K, callback: (e: RuxIconPhonelinkEraseEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhonelinkEraseProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhonelinkEraseElement | undefined;
}
export default RuxIconPhonelinkErase;
