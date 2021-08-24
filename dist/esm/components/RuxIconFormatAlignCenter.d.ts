import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatAlignCenterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatAlignCenter["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatAlignCenter["size"];
}
interface RuxIconFormatAlignCenterEvents {
}
interface RuxIconFormatAlignCenterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatAlignCenter extends SvelteComponent {
    $$prop_def: RuxIconFormatAlignCenterProps;
    $$events_def: RuxIconFormatAlignCenterEvents;
    $$slot_def: RuxIconFormatAlignCenterSlots;
    $on<K extends keyof RuxIconFormatAlignCenterEvents>(type: K, callback: (e: RuxIconFormatAlignCenterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatAlignCenterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatAlignCenterElement | undefined;
}
export default RuxIconFormatAlignCenter;
