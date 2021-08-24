import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWbIncandescentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWbIncandescent["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWbIncandescent["size"];
}
interface RuxIconWbIncandescentEvents {
}
interface RuxIconWbIncandescentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWbIncandescent extends SvelteComponent {
    $$prop_def: RuxIconWbIncandescentProps;
    $$events_def: RuxIconWbIncandescentEvents;
    $$slot_def: RuxIconWbIncandescentSlots;
    $on<K extends keyof RuxIconWbIncandescentEvents>(type: K, callback: (e: RuxIconWbIncandescentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWbIncandescentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWbIncandescentElement | undefined;
}
export default RuxIconWbIncandescent;
