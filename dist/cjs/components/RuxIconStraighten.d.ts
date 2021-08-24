import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStraightenProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStraighten["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStraighten["size"];
}
interface RuxIconStraightenEvents {
}
interface RuxIconStraightenSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStraighten extends SvelteComponent {
    $$prop_def: RuxIconStraightenProps;
    $$events_def: RuxIconStraightenEvents;
    $$slot_def: RuxIconStraightenSlots;
    $on<K extends keyof RuxIconStraightenEvents>(type: K, callback: (e: RuxIconStraightenEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStraightenProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStraightenElement | undefined;
}
export default RuxIconStraighten;
