import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNoEncryptionProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNoEncryption["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNoEncryption["size"];
}
interface RuxIconNoEncryptionEvents {
}
interface RuxIconNoEncryptionSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNoEncryption extends SvelteComponent {
    $$prop_def: RuxIconNoEncryptionProps;
    $$events_def: RuxIconNoEncryptionEvents;
    $$slot_def: RuxIconNoEncryptionSlots;
    $on<K extends keyof RuxIconNoEncryptionEvents>(type: K, callback: (e: RuxIconNoEncryptionEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNoEncryptionProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNoEncryptionElement | undefined;
}
export default RuxIconNoEncryption;
