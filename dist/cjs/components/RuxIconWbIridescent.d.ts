import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWbIridescentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWbIridescent["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWbIridescent["size"];
}
interface RuxIconWbIridescentEvents {
}
interface RuxIconWbIridescentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWbIridescent extends SvelteComponent {
    $$prop_def: RuxIconWbIridescentProps;
    $$events_def: RuxIconWbIridescentEvents;
    $$slot_def: RuxIconWbIridescentSlots;
    $on<K extends keyof RuxIconWbIridescentEvents>(type: K, callback: (e: RuxIconWbIridescentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWbIridescentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWbIridescentElement | undefined;
}
export default RuxIconWbIridescent;
