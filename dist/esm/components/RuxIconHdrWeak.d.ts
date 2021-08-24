import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHdrWeakProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHdrWeak["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHdrWeak["size"];
}
interface RuxIconHdrWeakEvents {
}
interface RuxIconHdrWeakSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHdrWeak extends SvelteComponent {
    $$prop_def: RuxIconHdrWeakProps;
    $$events_def: RuxIconHdrWeakEvents;
    $$slot_def: RuxIconHdrWeakSlots;
    $on<K extends keyof RuxIconHdrWeakEvents>(type: K, callback: (e: RuxIconHdrWeakEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHdrWeakProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHdrWeakElement | undefined;
}
export default RuxIconHdrWeak;
