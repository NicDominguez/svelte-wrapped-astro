import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhonelinkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhonelink["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhonelink["size"];
}
interface RuxIconPhonelinkEvents {
}
interface RuxIconPhonelinkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhonelink extends SvelteComponent {
    $$prop_def: RuxIconPhonelinkProps;
    $$events_def: RuxIconPhonelinkEvents;
    $$slot_def: RuxIconPhonelinkSlots;
    $on<K extends keyof RuxIconPhonelinkEvents>(type: K, callback: (e: RuxIconPhonelinkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhonelinkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhonelinkElement | undefined;
}
export default RuxIconPhonelink;
