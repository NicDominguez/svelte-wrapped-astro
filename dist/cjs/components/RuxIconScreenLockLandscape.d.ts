import { Components } from '@astrouxds/astro-web-components';
interface RuxIconScreenLockLandscapeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconScreenLockLandscape["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconScreenLockLandscape["size"];
}
interface RuxIconScreenLockLandscapeEvents {
}
interface RuxIconScreenLockLandscapeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconScreenLockLandscape extends SvelteComponent {
    $$prop_def: RuxIconScreenLockLandscapeProps;
    $$events_def: RuxIconScreenLockLandscapeEvents;
    $$slot_def: RuxIconScreenLockLandscapeSlots;
    $on<K extends keyof RuxIconScreenLockLandscapeEvents>(type: K, callback: (e: RuxIconScreenLockLandscapeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconScreenLockLandscapeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconScreenLockLandscapeElement | undefined;
}
export default RuxIconScreenLockLandscape;
