import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEnhancedEncryptionProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEnhancedEncryption["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEnhancedEncryption["size"];
}
interface RuxIconEnhancedEncryptionEvents {
}
interface RuxIconEnhancedEncryptionSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEnhancedEncryption extends SvelteComponent {
    $$prop_def: RuxIconEnhancedEncryptionProps;
    $$events_def: RuxIconEnhancedEncryptionEvents;
    $$slot_def: RuxIconEnhancedEncryptionSlots;
    $on<K extends keyof RuxIconEnhancedEncryptionEvents>(type: K, callback: (e: RuxIconEnhancedEncryptionEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEnhancedEncryptionProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEnhancedEncryptionElement | undefined;
}
export default RuxIconEnhancedEncryption;
