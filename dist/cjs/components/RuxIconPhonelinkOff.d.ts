import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhonelinkOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhonelinkOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhonelinkOff["size"];
}
interface RuxIconPhonelinkOffEvents {
}
interface RuxIconPhonelinkOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhonelinkOff extends SvelteComponent {
    $$prop_def: RuxIconPhonelinkOffProps;
    $$events_def: RuxIconPhonelinkOffEvents;
    $$slot_def: RuxIconPhonelinkOffSlots;
    $on<K extends keyof RuxIconPhonelinkOffEvents>(type: K, callback: (e: RuxIconPhonelinkOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhonelinkOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhonelinkOffElement | undefined;
}
export default RuxIconPhonelinkOff;
