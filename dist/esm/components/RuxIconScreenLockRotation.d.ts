import { Components } from '@astrouxds/astro-web-components';
interface RuxIconScreenLockRotationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconScreenLockRotation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconScreenLockRotation["size"];
}
interface RuxIconScreenLockRotationEvents {
}
interface RuxIconScreenLockRotationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconScreenLockRotation extends SvelteComponent {
    $$prop_def: RuxIconScreenLockRotationProps;
    $$events_def: RuxIconScreenLockRotationEvents;
    $$slot_def: RuxIconScreenLockRotationSlots;
    $on<K extends keyof RuxIconScreenLockRotationEvents>(type: K, callback: (e: RuxIconScreenLockRotationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconScreenLockRotationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconScreenLockRotationElement | undefined;
}
export default RuxIconScreenLockRotation;
