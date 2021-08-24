import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhonelinkLockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhonelinkLock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhonelinkLock["size"];
}
interface RuxIconPhonelinkLockEvents {
}
interface RuxIconPhonelinkLockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhonelinkLock extends SvelteComponent {
    $$prop_def: RuxIconPhonelinkLockProps;
    $$events_def: RuxIconPhonelinkLockEvents;
    $$slot_def: RuxIconPhonelinkLockSlots;
    $on<K extends keyof RuxIconPhonelinkLockEvents>(type: K, callback: (e: RuxIconPhonelinkLockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhonelinkLockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhonelinkLockElement | undefined;
}
export default RuxIconPhonelinkLock;
