import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhonelinkSetupProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhonelinkSetup["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhonelinkSetup["size"];
}
interface RuxIconPhonelinkSetupEvents {
}
interface RuxIconPhonelinkSetupSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhonelinkSetup extends SvelteComponent {
    $$prop_def: RuxIconPhonelinkSetupProps;
    $$events_def: RuxIconPhonelinkSetupEvents;
    $$slot_def: RuxIconPhonelinkSetupSlots;
    $on<K extends keyof RuxIconPhonelinkSetupEvents>(type: K, callback: (e: RuxIconPhonelinkSetupEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhonelinkSetupProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhonelinkSetupElement | undefined;
}
export default RuxIconPhonelinkSetup;
