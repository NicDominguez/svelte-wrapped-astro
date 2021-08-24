import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLock["size"];
}
interface RuxIconLockEvents {
}
interface RuxIconLockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLock extends SvelteComponent {
    $$prop_def: RuxIconLockProps;
    $$events_def: RuxIconLockEvents;
    $$slot_def: RuxIconLockSlots;
    $on<K extends keyof RuxIconLockEvents>(type: K, callback: (e: RuxIconLockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLockElement | undefined;
}
export default RuxIconLock;
