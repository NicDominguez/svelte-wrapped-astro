import { Components } from '@astrouxds/astro-web-components';
interface RuxIconScreenLockPortraitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconScreenLockPortrait["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconScreenLockPortrait["size"];
}
interface RuxIconScreenLockPortraitEvents {
}
interface RuxIconScreenLockPortraitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconScreenLockPortrait extends SvelteComponent {
    $$prop_def: RuxIconScreenLockPortraitProps;
    $$events_def: RuxIconScreenLockPortraitEvents;
    $$slot_def: RuxIconScreenLockPortraitSlots;
    $on<K extends keyof RuxIconScreenLockPortraitEvents>(type: K, callback: (e: RuxIconScreenLockPortraitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconScreenLockPortraitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconScreenLockPortraitElement | undefined;
}
export default RuxIconScreenLockPortrait;
