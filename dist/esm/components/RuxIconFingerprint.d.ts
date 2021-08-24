import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFingerprintProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFingerprint["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFingerprint["size"];
}
interface RuxIconFingerprintEvents {
}
interface RuxIconFingerprintSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFingerprint extends SvelteComponent {
    $$prop_def: RuxIconFingerprintProps;
    $$events_def: RuxIconFingerprintEvents;
    $$slot_def: RuxIconFingerprintSlots;
    $on<K extends keyof RuxIconFingerprintEvents>(type: K, callback: (e: RuxIconFingerprintEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFingerprintProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFingerprintElement | undefined;
}
export default RuxIconFingerprint;
