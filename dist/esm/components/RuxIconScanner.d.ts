import { Components } from '@astrouxds/astro-web-components';
interface RuxIconScannerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconScanner["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconScanner["size"];
}
interface RuxIconScannerEvents {
}
interface RuxIconScannerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconScanner extends SvelteComponent {
    $$prop_def: RuxIconScannerProps;
    $$events_def: RuxIconScannerEvents;
    $$slot_def: RuxIconScannerSlots;
    $on<K extends keyof RuxIconScannerEvents>(type: K, callback: (e: RuxIconScannerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconScannerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconScannerElement | undefined;
}
export default RuxIconScanner;
