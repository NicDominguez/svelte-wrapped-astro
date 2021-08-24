import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLockOpenProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLockOpen["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLockOpen["size"];
}
interface RuxIconLockOpenEvents {
}
interface RuxIconLockOpenSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLockOpen extends SvelteComponent {
    $$prop_def: RuxIconLockOpenProps;
    $$events_def: RuxIconLockOpenEvents;
    $$slot_def: RuxIconLockOpenSlots;
    $on<K extends keyof RuxIconLockOpenEvents>(type: K, callback: (e: RuxIconLockOpenEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLockOpenProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLockOpenElement | undefined;
}
export default RuxIconLockOpen;
