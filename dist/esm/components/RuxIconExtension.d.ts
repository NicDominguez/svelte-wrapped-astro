import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExtensionProps {
    /** The fill color for the icon */
    color?: Components.RuxIconExtension["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExtension["size"];
}
interface RuxIconExtensionEvents {
}
interface RuxIconExtensionSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExtension extends SvelteComponent {
    $$prop_def: RuxIconExtensionProps;
    $$events_def: RuxIconExtensionEvents;
    $$slot_def: RuxIconExtensionSlots;
    $on<K extends keyof RuxIconExtensionEvents>(type: K, callback: (e: RuxIconExtensionEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconExtensionProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExtensionElement | undefined;
}
export default RuxIconExtension;
