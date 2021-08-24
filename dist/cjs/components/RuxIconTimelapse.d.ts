import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTimelapseProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTimelapse["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTimelapse["size"];
}
interface RuxIconTimelapseEvents {
}
interface RuxIconTimelapseSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTimelapse extends SvelteComponent {
    $$prop_def: RuxIconTimelapseProps;
    $$events_def: RuxIconTimelapseEvents;
    $$slot_def: RuxIconTimelapseSlots;
    $on<K extends keyof RuxIconTimelapseEvents>(type: K, callback: (e: RuxIconTimelapseEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTimelapseProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTimelapseElement | undefined;
}
export default RuxIconTimelapse;
